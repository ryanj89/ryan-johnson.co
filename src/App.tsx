import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Events, scrollSpy } from 'react-scroll';
import axios from 'axios';

import { ResumeData } from '../types';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface State {
  resumeData?: ResumeData;
}

// TODO: Setup ReactGA
class App extends React.Component<{}, State> {
  state: State = {};
  navRef = React.createRef<HTMLElement>();
  homeRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.getResumeData();
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
      if (to) {
        window.location.hash = '#' + to;
      }
    });
    scrollSpy.update();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }

  readonly handleScroll = () => {
    const h = this.homeRef.current!.clientHeight;
    const navRef = this.navRef.current!;
    const y = window.scrollY;

    if (y > h * 0.2 && y < h && window.outerWidth > 768) {
      navRef.style.opacity = '0';
    } else {
      if (y < h * 0.2) {
        navRef.classList.remove('opaque');
      } else {
        navRef.classList.add('opaque');
      }
      navRef.style.opacity = '1';
    }
  };

  getResumeData = async () => {
    // TODO: cleanup
    try {
      const load = document.getElementById('siteLoading');
      const { data } = await axios.get('/resume.json', { responseType: 'json' });
      console.log('resume', data);
      this.setState({ resumeData: data });
      setTimeout(() => {
        load!.outerHTML = '';
      }, 2000);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  render(): React.ReactNode {
    if (!this.state.resumeData) {
      return null;
    }

    const { personal, resume, portfolio, testimonials } = this.state.resumeData;
    return (
      <>
        <Header data={personal} homeRef={this.homeRef} navRef={this.navRef} />
        <About data={personal} />
        <Resume data={resume} />
        <Portfolio data={portfolio} />
        <Testimonials data={testimonials} />
        <Contact data={personal} />
        <Footer socialNetworks={personal.socialNetworks} />
      </>
    );
  }
}

export default hot(module)(App);
