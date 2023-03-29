import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const ServicesAcordion = () => {
  return (
    <div className="bg-Secundario w-full px-10 md:px-20">
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <h2 className="text-2xl pt-20 pb-12 text-white w-full md:pl-10">Step by Step</h2>
        <div className='md:pl-10'>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=''>1. Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this phase you contact us by filling out the required form with a proposal for your company that needs our services.<br/>
          Then in less than 24 hours we will get back to you with the necessary information to move on to the second phase.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>2. Virtual Meeting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is where the company works with the client to understand their business objectives and identify the scope of the project. This includes gathering requirements, determining the features and functionality of the application, and creating a project plan that outlines the timeline, budget, and milestones.<br/>
          We'll start by asking you a series of questions about your business, your target audience, and the features and functionality that you'd like to include in your application. This will help us determine the scope of the project and create a project plan that outlines the timeline, budget, and milestones.<br/>
          Throughout the discovery and planning phase, we'll keep you informed and involved in the process. We'll provide regular updates on our progress and seek your feedback and approval at each stage. This ensures that we're on the same page and that we're working towards the same goals.<br/>
          At the end of the discovery and planning phase, we'll have a comprehensive project plan and a clear understanding of your requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>3. Desing and product Prototype</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The company will create wireframes and mockups of the application's user interface (UI) and user experience (UX) design. This step involves making sure that the design is user-friendly, intuitive, and aligns with the client's brand and business goals.<br/>
          Our first step in the design process is to create wireframes and mockups of the application's UI and UX design. These are basic sketches of what the application will look like and how users will interact with it. We'll work with you to refine these designs until we have a final version that meets your expectations.<br/>
          Once the wireframes and mockups are approved, we'll move on to the visual design phase. This is where we'll add colors, typography, and other design elements to create a visually appealing and engaging UI. We'll create a design that aligns with your brand and business goals and ensures that users have a positive experience when using your application.<br/>
          Throughout the design process, we'll keep you informed and involved in the process. We'll seek your feedback and approval at each stage to ensure that we're on the same page and that we're meeting your expectations. We'll also ensure that the design is responsive and optimized for different devices, such as desktops, tablets, and mobile phones.<br/>
          At the end of the design phase, we'll have a final version of the UI and UX design that meets your requirements and aligns with your brand and business goals. This will enable us to move forward with the development phase with confidence, knowing that we're creating an application that will meet your needs and exceed your expectations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>4. Production Stage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Once the design is approved, our developers will start building the application's back-end and front-end components. This includes programming the application's functionality and creating a database to store data. The development process may be divided into sprints, with each sprint focusing on a specific set of features and functionality.<br/>
          Testing: Once the development is complete, the company will thoroughly test the application to ensure that it meets the client's requirements and is free of bugs and errors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>5. Upload to the web</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Web hosting is the process of storing website files and data on a server that is connected to the internet. It allows your website to be accessible to users 24/7, and it's an essential component of having an online presence. When you choose a web hosting service, Veksten provide you with a specific amount of space on their server for your website, as well as various tools to manage and update your website. <br /><br />
          Here's an overview of the web hosting process that we typically follow:<br/><br />
          1- Choosing a hosting plan: The company will work with you to determine the hosting plan that best fits your needs. This may involve assessing the size of your website, the number of visitors you expect, and the types of features you require.<br />
          2- Domain registration: If you haven't already registered a domain name for your website, the IT company will help you choose and register one. This is the address that people will use to access your website, such as "www.yourcompanyname.com."<br/>
          3- Setting up the hosting account: Once you've chosen a hosting plan and registered a domain name, the company will set up your hosting account. This involves configuring the server, creating login credentials, and installing any necessary software.<br/>
          4- Uploading website files: You'll need to upload your website files to the server. This includes any HTML, CSS, and JavaScript files, as well as any images, videos, or other media that your website uses.<br/>
          Testing and troubleshooting: After your website is uploaded, the company will test it to ensure that everything is working properly. They'll also be available to troubleshoot any issues that may arise<br/>
          5- Maintenance and updates: Once your website is live, Veksten will provide ongoing maintenance and updates to ensure that everything continues to run smoothly. This may include software updates, security patches, and regular backups of your website data.<br/><br />
          That's a general overview of the web hosting process that Veksten might explain to a client. If you have any further questions, please don't hesitate to ask.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default ServicesAcordion