import { Button } from '@/components/atoms';
import { BaseContainer } from '@/components/molecules/containers';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <BaseContainer className="flex py-20">
      <div className="m-auto max-w-3xl text-center">
        <h1>{t('headline')}</h1>
        <p className="text-foreground mt-4">{t('author', { name: 'Diaz', year: 2024 })}</p>
        <div className="mt-4 flex justify-center gap-3">
          <Button size={'icon'} variant={'outline'} asChild>
            <Link target="_blank" to={'https://github.com/Diaz-adrianz'}>
              <Github className="text-muted-foreground" />
            </Link>
          </Button>
          <Button size={'icon'} variant={'outline'} asChild>
            <Link target="_blank" to={'https://www.linkedin.com/in/diaz-adriansyah/'}>
              <Linkedin className="text-muted-foreground" />
            </Link>
          </Button>
          <Button size={'icon'} variant={'outline'} asChild>
            <Link target="_blank" to={'https://www.instagram.com/zaid.jsx/'}>
              <Instagram className="text-muted-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </BaseContainer>
  );
};

export default HomePage;
