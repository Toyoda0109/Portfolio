import { useState } from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';

export const useContactForm = () => {
  const API_FORM_URL = process.env.REACT_APP_API_FORM_URL;

  if (!API_FORM_URL) {
    console.error('環境変数 REACT_APP_API_FORM_URL が設定されていません');
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);

    if (e.target.name === 'message' && sanitizedValue.length > 500) {
      setStatusMessage('メッセージは500文字以内にしてください。');
      return;
    }

    setFormData({
      ...formData,
      [e.target.name]: sanitizedValue,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setStatusMessage('Invalid email address');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    try {
      await axios.post(`${API_FORM_URL}/send-email`, formData, {
        withCredentials: true,
      });
      setStatusMessage('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('メールの送信に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    statusMessage,
    handleChange,
    handleSubmit,
  };
};
