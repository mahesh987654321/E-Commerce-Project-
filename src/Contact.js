import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 3rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        /* man */
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117658.98533132086!2d89.46246113870049!3d22.845286583000416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9071cb47152f%3A0xf04b212290718952!2sKhulna!5e0!3m2!1sen!2sbd!4v1664547169471!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" action="" method="POST">
            <input
              type="text"
              autoComplete="off"
              required
              placeholder="username"
              name="username"
            />
            <input
              type="email"
              autoComplete="off"
              name="Email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              autoComplete="off"
              placeholder="Enter Your message"
              cols="30"
              rows="10"
              required
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
