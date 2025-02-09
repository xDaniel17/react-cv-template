import { useState } from 'react';
import { About } from '../components/About';
import { ContactInfo } from '../components/ContactInfo';
import { useUserProfile } from '../hooks/useUserProfile';
import { LanguageSelector } from '../components/LanguageSelector';
import { Technologies } from '../components/Technologies';
//import { ThemeSelector } from '../components/ThemeSelector';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { Loading } from '../components/Loading';
import '../styles/UserProfilePage.css';
import { AVAILABLE_LANGUAGES } from '../consts';

export function UserProfilePage() {
  //const { userId } = useParams<{ userId: string }>();
  //const location = useLocation();
  const { userProfile, loading, error } = useUserProfile();
  const [selectedLanguage, setSelectedLanguage] = useState<AVAILABLE_LANGUAGES>('en');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language as AVAILABLE_LANGUAGES);
  };

  // useEffect(() => {
  //   console.log(`Location changed: ${location.pathname}`);
  // }, [location]);

  // useEffect(() => {
  //   console.log(`User ID changed: ${userId}`);
  // }, [userId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div role="alert">{error}</div>;
  }

  if (!userProfile) {
    return <h1>No se encontró el usuario.</h1>;
  }

  //console.log('UserProfilePage renderizado con userId:', userId);
  const availableLanguages = Object.keys(userProfile.data.contactInfo.title);

  return (
    <>
      <header>
        <section className='header-selection-container'>
          {/* <ThemeSelector /> */}
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            userLanguages={availableLanguages} />
        </section>
        <div className="blur-in-expand">
          <ContactInfo user={userProfile} language={selectedLanguage} />
        </div>
      </header>
      <main>
        <div className="blur-in-expand">
          <About user={userProfile} language={selectedLanguage} />
        </div>
        <div className="blur-in-expand">
          <Technologies user={userProfile} language={selectedLanguage} />
        </div>
        <div className="blur-in-expand">
          <Experience user={userProfile} language={selectedLanguage} />
        </div>
        <div className="blur-in-expand">
          <Education user={userProfile} language={selectedLanguage} />
        </div>
        <div className="blur-in-expand">
          <Projects user={userProfile} language={selectedLanguage} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UserProfilePage;