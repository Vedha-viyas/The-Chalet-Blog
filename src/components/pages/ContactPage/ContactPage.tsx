import type { FC } from 'react';
import { useState } from 'react';
import styles from './ContactPage.module.scss';

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.contactHeader}>
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        <p className={styles.subtitle}>
          Have a project in mind? Let's work together!
        </p>
      </section>

      <section className={styles.contactContent}>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={6}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <h2 className={styles.infoTitle}>Other Ways to Connect</h2>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Email</h3>
              <a href="mailto:contact@example.com" className={styles.infoLink}>
                contact@example.com
              </a>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Social</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  GitHub
                </a>
                <a href="#" className={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="#" className={styles.socialLink}>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
