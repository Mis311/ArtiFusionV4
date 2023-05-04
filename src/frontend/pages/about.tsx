import { NextPage } from 'next';
import { Typography, Divider, Row, Col } from 'antd';
import AFLayout from '../components/Layout/AFLayout';


const { Title, Paragraph } = Typography;
const AboutUs: NextPage = () => {
    return (
        
      <div style={{ padding: '2rem' }}>
    
        <Typography>
          <Title>About Us</Title>
          <Paragraph>
            Artifusion is an AI-driven platform that helps artists and creators to generate and share their art and novels. Our mission is to empower creative minds and foster a community of innovation and collaboration.
          </Paragraph>
          <Divider />
          <Title level={2}>Our Team</Title>
          <Row gutter={[16, 16]}>
            {/* Add as many team members as needed */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Title level={4}>John Doe</Title>
              <Paragraph>CEO & Co-founder</Paragraph>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Title level={4}>Jane Smith</Title>
              <Paragraph>CTO & Co-founder</Paragraph>
            </Col>
          </Row>
        </Typography>
      </div>
    );
  };
  export default AboutUs;
  