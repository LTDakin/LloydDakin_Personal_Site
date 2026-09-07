import resumePDF from '../assets/files/full_stack_resume.pdf';
import PageHeader from '../components/PageHeader';


function ResumePage() {
  return (
    <div className="about-page-div">
      <PageHeader title="Resume" />
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
