import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { fetchGitHubContributions } from '../apis/github';
import { formatDate } from '../utils/date';

const GITHUB_USERNAME = 'LTDakin';

const OPACITY_SCALE = [0.2, 0.4, 0.6, 0.8, 1];

function buildGrid(calendar) {
  const weekdayColumns = [[], [], [], [], [], [], []];
  for (const day of calendar) {
    const dow = new Date(day.date).getDay();
    weekdayColumns[dow].push(day);
  }
  return weekdayColumns;
}

// --- Component ---

function GitHeatMap({ backgroundImage }) {
  const [calendar, setCalendar] = useState([]);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gridInfo, setGridInfo] = useState({ cellSize: 28, gap: 3 });
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const width = el.clientWidth;
      const gap = Math.max(2, Math.floor(width / 200));
      const cellSize = Math.floor((width - gap * 6) / 7);
      setGridInfo({ cellSize: Math.max(8, cellSize), gap });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchGitHubContributions(GITHUB_USERNAME)
      .then(({ calendar: cal }) => {
        if (!cancelled) {
          setCalendar(cal);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading)
    return (
      <Wrapper ref={wrapperRef} $bgUrl={backgroundImage}>
        <LoadingText>Loading contributions...</LoadingText>
      </Wrapper>
    );
  if (error) return <Wrapper ref={wrapperRef} $bgUrl={backgroundImage} />;

  const grid = buildGrid(calendar);

  const handleMouseEnter = (day, e) => {
    const rect = e.target.getBoundingClientRect();
    const parentRect = e.target
      .closest('[data-grid-wrapper]')
      .getBoundingClientRect();
    setHoveredDay(day);
    setTooltipPos({
      top: rect.top - parentRect.top,
      left: rect.left - parentRect.left + rect.width / 2,
    });
  };

  const tooltipText = hoveredDay
    ? `${hoveredDay.count} contribution${
        hoveredDay.count !== 1 ? 's' : ''
      } on ${formatDate(hoveredDay.date)}`
    : null;

  return (
    <Wrapper ref={wrapperRef} $bgUrl={backgroundImage}>
      <GridContainer
        data-grid-wrapper
        $cellSize={gridInfo.cellSize}
        $gap={gridInfo.gap}
      >
        {grid.map((weekdayCol, ci) => (
          <WeekColumn key={ci} $gap={gridInfo.gap}>
            {weekdayCol.filter(Boolean).map((day) => (
              <Cell
                key={day.date}
                $size={gridInfo.cellSize}
                $opacity={OPACITY_SCALE[day.level]}
                onMouseEnter={(e) => handleMouseEnter(day, e)}
                onMouseLeave={() => setHoveredDay(null)}
              />
            ))}
          </WeekColumn>
        ))}
        {hoveredDay && (
          <Tooltip $top={tooltipPos.top} $left={tooltipPos.left}>
            {tooltipText}
          </Tooltip>
        )}
      </GridContainer>
    </Wrapper>
  );
}

// --- Styled Components ---

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-image: url(${({ $bgUrl }) => $bgUrl});
  background-size: cover;
  background-position: center;
`;

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, ${({ $cellSize }) => $cellSize}px);
  gap: ${({ $gap }) => $gap}px;
`;

const WeekColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;
`;

const Cell = styled.div`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 15px;
  background: white;
  opacity: ${({ $opacity }) => $opacity};
  cursor: pointer;
`;

const Tooltip = styled.div`
  position: absolute;
  z-index: 10;
  background: #1c2128;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 8px 12px;
  color: #e6edf3;
  font-size: 12px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  line-height: 1.5;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  transform: translate(-50%, -110%);
`;

const LoadingText = styled.div`
  color: #7d8690;
  font-family: coolvetica, sans-serif;
  font-size: 1.5em;
`;

export default GitHeatMap;
