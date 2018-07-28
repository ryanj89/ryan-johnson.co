import * as React from 'react';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Row from './Row';
import Column from './Column';
import { PersonalInfo } from '../../types';
import Button from './Button';

interface Props {
  handleEnter: (name: string) => void;
  setRef: (ref: HTMLElement) => void;
  data: PersonalInfo;
}
interface State {
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
}
class Contact extends React.Component<Props, State> {
  readonly state = {
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  };

  readonly handleChange: React.ChangeEventHandler<HTMLInputElement & HTMLTextAreaElement> = e => {
    const { name, value } = e.target;
    console.log(name, value);
    // tslint:disable-next-line:no-any
    this.setState({ [name]: value } as any);
  };

  readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    console.log(this.state);
    // TODO: Setup email service... Nodemailer?
  };

  render(): React.ReactNode {
    const {
      email,
      name,
      address: { city, state, zip },
      phone,
      contactMessage,
    } = this.props.data;

    return (
      <Waypoint bottomOffset="90%" onEnter={() => this.props.handleEnter('contact')}>
        <div>
          <ContactSection id="contact" innerRef={this.props.setRef}>
            <SectionHeaderRow>
              <HeaderColumn width={2}>
                <Heading>
                  <FontAwesomeIcon icon="envelope" size="2x" />
                </Heading>
              </HeaderColumn>

              <Column width={10}>
                <LeadText>{contactMessage}</LeadText>
              </Column>
            </SectionHeaderRow>

            <Row>
              <Column width={8}>
                <ContactForm action="" method="post" id="contact-form" name="contact-form">
                  <fieldset>
                    <div>
                      <ContactLabel htmlFor="contactName">
                        Name <Required>*</Required>
                      </ContactLabel>
                      <Input
                        type="text"
                        id="contactName"
                        name="contactName"
                        size={35}
                        defaultValue=""
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <ContactLabel htmlFor="contactEmail">
                        Email <Required>*</Required>
                      </ContactLabel>
                      <Input
                        type="text"
                        id="contactEmail"
                        name="contactEmail"
                        size={35}
                        defaultValue=""
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <ContactLabel htmlFor="contactSubject">Subject</ContactLabel>
                      <Input
                        type="text"
                        id="contactSubject"
                        name="contactSubject"
                        size={35}
                        defaultValue=""
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <ContactLabel htmlFor="contactMessage">
                        Message <Required>*</Required>
                      </ContactLabel>
                      <TextArea
                        id="contactMessage"
                        name="contactMessage"
                        cols={50}
                        rows={15}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <SubmitButton>Submit</SubmitButton>
                      <ImageLoader id="image-loader">
                        <img src="images/loader.gif" alt="" />
                      </ImageLoader>
                    </div>
                  </fieldset>
                </ContactForm>

                <WarningMessage id="message-warning"> Error boy</WarningMessage>
                <SuccessMessage id="message-success">
                  <FontAwesomeIcon icon="check-circle" style={{ marginRight: '10px' }} /> Message
                  successfully sent! I will get back to you ASAP!<br />
                </SuccessMessage>
              </Column>

              <FooterWidgetsColumn width={4}>
                <div>
                  <ContactDetailsHeading>Contact Details</ContactDetailsHeading>
                  <p>
                    {name}
                    <br />
                    {city}
                    <br />
                    {state}, {zip}
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>
                      <Link href={`mailto:${email}`}>{email}</Link>
                    </span>
                  </p>
                </div>
              </FooterWidgetsColumn>
            </Row>
          </ContactSection>
        </div>
      </Waypoint>
    );
  }
}

export default Contact;

const ContactSection = styled.section`
  background: #191919;
  padding-top: 96px;
  padding-bottom: 102px;
  color: #636363;
`;

const SectionHeaderRow = styled(Row)`
  margin-bottom: 42px;
`;

const HeaderColumn = styled(Column)`
  padding-top: 6px;
`;

const Heading = styled.h1`
  color: #ebeeee;
`;

const LeadText = styled.p`
  font: 18px/36px 'Open Sans', sans-serif;
  font-weight: 300;
  padding-right: 3%;
`;

const ContactDetailsHeading = styled.h4`
  font: 16px/24px 'Open Sans', sans-serif;
  font-weight: 700;
  color: #ebeeee;
  margin-bottom: 6px;
`;

const Link = styled.a`
  &,
  &:visited {
    color: #11abb0;
  }
  &:hover,
  &:focus {
    color: #fff;
  }
`;

const ContactForm = styled.form`
  margin-bottom: 30px;
`;

const ContactLabel = styled.label`
  font: 15px/24px 'Open Sans', sans-serif;
  font-weight: 700;
  margin: 12px 0;
  color: #ebeeee;
  float: left;
  width: 26%;
`;

const Input = styled.input`
  padding: 18px 20px;
  color: #eee;
  background: #373233;
  margin-bottom: 42px;
  border: 0;
  outline: none;
  font-size: 15px;
  line-height: 24px;
  width: 65%;

  &:focus {
    color: #fff;
    background-color: #11abb0;
  }
`;

const TextArea = styled.textarea`
  padding: 18px 20px;
  color: #eee;
  background: #373233;
  margin-bottom: 42px;
  border: 0;
  outline: none;
  font-size: 15px;
  line-height: 24px;
  width: 65%;

  &:focus {
    color: #fff;
    background-color: #11abb0;
  }
`;

const Required = styled.span`
  color: #11abb0;
  font-size: 13px;
`;

const SubmitButton = styled(Button)`
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
  background: #0d0d0d;
  border: none;
  cursor: pointer;
  height: auto;
  display: inline-block;
  border-radius: 3px;
  margin-left: 26%;

  &:hover {
    color: #0d0d0d;
    background: #fff;
  }
`;

const Message = styled.div`
  display: none;
  background: #0f0f0f;
  padding: 24px 24px;
  margin-bottom: 36px;
  width: 65%;
  margin-left: 26%;
`;

const WarningMessage = styled(Message)`
  color: #d72828;
`;

const SuccessMessage = styled(Message)`
  color: #179038;
`;

const ImageLoader = styled.span`
  display: none;
  position: relative;
  left: 18px;
  top: 17px;
`;

const FooterWidgetsColumn = styled(Column)``.withComponent('aside');
