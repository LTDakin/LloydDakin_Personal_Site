import BackButton from '../components/BackButton';
import resumePDF from '../assets/full_stack_resume.pdf';

function ResumePage() {
  return (
    <div className="about-page-div">
      <div className="page-header d-flex justify-content-between">
        <h1
          style={{
            fontFamily: 'lemonmilk',
            fontSize: '4rem',
          }}
        >
          Resume
        </h1>
        <BackButton />
      </div>
      <div className="work-experience-div" style={{ padding: '30px' }}>
        <object
          data={resumePDF}
          type="application/pdf"
          width="100%"
          height="750px"
        >
          <p>
            Your browser doesn't support PDF viewing.
            <a href={resumePDF}>Download it</a> instead.
          </p>
        </object>
      </div>
    </div>
  );
}

export default ResumePage;
