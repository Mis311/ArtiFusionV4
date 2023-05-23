import { Form, Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';

const { TextArea } = Input;
const { Dragger } = Upload;

const UploadForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values) => {
    setLoading(true);

    // Here you would send a request to your API to store the data
    // This is just a placeholder
    await new Promise((resolve) => setTimeout(resolve, 1000));

    message.success('Your graphic novel has been submitted!');
    form.resetFields();
    setLoading(false);

    // You can also redirect the user to another page if needed
    // router.push('/somePage');
  };

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input the title of your novel!' }]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[{ required: true, message: 'Please input a description!' }]}
      >
        <TextArea placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="author"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Author" />
      </Form.Item>

      <Form.Item
        name="story"
        rules={[{ required: true, message: 'Please write your story!' }]}
      >
        <TextArea placeholder="Story" />
      </Form.Item>

      <Form.Item
        name="images"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Please upload your images!' }]}
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Use [pic1], [pic2], etc. in your story to place these images. Use #b before a picture tag to set it as a background.
          </p>
        </Dragger>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

function normFile(e) {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
   
    return e;
  }
  return e && e.fileList;
}

export default UploadForm;
