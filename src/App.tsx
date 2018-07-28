import * as React from 'react';
import { hot } from 'react-hot-loader';
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
  activeLink: string;
  resumeData: ResumeData | null;
}

// TODO: Setup ReactGA
class App extends React.Component<{}, State> {
  navRef = React.createRef<HTMLElement>();
  sectionRefs: Map<string, HTMLElement> = new Map<string, HTMLElement>();
  scrollTimeout: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = {
      activeLink: 'home',
      resumeData: null,
    };
  }

  componentDidMount() {
    this.getResumeData();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  readonly setRef = (ref: HTMLElement) => {
    this.sectionRefs.set(ref.id, ref);
  };

  readonly handleScroll = () => {
    const h = this.sectionRefs.get('home')!.clientHeight;
    const navRef = this.navRef.current!;
    const y = window.scrollY;

    if (y > h * 0.2 && y < h && window.outerWidth > 768) {
      navRef.style.opacity = '0';
    } else {
      if (y < h * 0.2) {
        navRef.classList.remove('opaque');
        navRef.style.opacity = '1';
        this.setState({ activeLink: 'home' });
      } else {
        navRef.classList.add('opaque');
        navRef.style.opacity = '1';
      }
    }
  };

  scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionName = e.currentTarget.hash.substr(1);
    const ref = this.sectionRefs.get(sectionName);
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // TODO:
  getResumeData = async () => {
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

  handleEnter = (name: string) => {
    this.setState({ activeLink: name });
  };

  render(): React.ReactNode {
    if (!this.state.resumeData) {
      return null;
    }
    const { personal, resume, portfolio, testimonials } = this.state.resumeData;
    return (
      <div>
        <Header
          data={personal}
          activeLink={this.state.activeLink}
          scrollTo={this.scrollToSection}
          navRef={this.navRef}
          setRef={this.setRef}
        />
        <About data={personal} setRef={this.setRef} handleEnter={this.handleEnter} />
        <Resume data={resume} setRef={this.setRef} handleEnter={this.handleEnter} />
        <Portfolio data={portfolio} setRef={this.setRef} handleEnter={this.handleEnter} />
        <Testimonials data={testimonials} setRef={this.setRef} handleEnter={this.handleEnter} />
        <Contact data={personal} setRef={this.setRef} handleEnter={this.handleEnter} />
        <Footer socialNetworks={personal.socialNetworks} scrollTo={this.scrollToSection} />
      </div>
    );
  }
}

export default hot(module)(App);
