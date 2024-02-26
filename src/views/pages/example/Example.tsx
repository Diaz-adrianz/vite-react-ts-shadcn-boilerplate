import Header from '@/components/header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Config from '@/config';
import { Unplug, Layers, FolderSync, Laptop2, Umbrella, Minus, Plus } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';
import { decrement, increment } from '@/store/general.store';
import { useStore } from '@/providers/store.provider';
import { Input } from '@/components/ui/input';
import { FormEvent, useEffect, useState } from 'react';
import StorageService from '@/services/storage';
import { useEvents } from '@/providers/events.provider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import PhotosApi from '@/api/photos.api';
import { Photo } from '@/types/photo.type';
import { Section } from '@/components/section';

export default function ExamplePage() {
  return (
    <>
      <Header />

      <Section>
        <Landing />
      </Section>
      <Section>
        <Solutions />
      </Section>
      <Section>
        <Resources />
      </Section>
      <Section>
        <ShadCn />
      </Section>
      <Section>
        <Typography />
      </Section>
      <Section>
        <Redux />
      </Section>
      <Section>
        <Events />
      </Section>
      <Section>
        <Storage />
      </Section>
      <Section>
        <Axios />
      </Section>
    </>
  );
}

function Landing() {
  const { t } = useTranslation();
  return (
    <div className="py-24">
      <h1 className="text-h-1 text-center mb-3 max-w-screen-sm mx-auto">{t('demo.tagline')} ✨</h1>
      <p className="text-b-1 text-center">
        {t('created_by')}{' '}
        <a href={Config.general.author.insta} target="_blank">
          {Config.general.author.real_name}
        </a>{' '}
        a.k.a {Config.general.author.name} in {Config.general.app.year_created}
      </p>
    </div>
  );
}

function Solutions() {
  const { t } = useTranslation();

  const appSolutions = [
    {
      icon: <Unplug />,
      title: t('demo.solutions.0.title'),
      content: t('demo.solutions.0.content'),
    },
    {
      icon: <Layers />,
      title: t('demo.solutions.1.title'),
      content: t('demo.solutions.1.content'),
    },
    {
      icon: <FolderSync />,
      title: t('demo.solutions.2.title'),
      content: t('demo.solutions.2.content'),
    },
    {
      icon: <Laptop2 />,
      title: t('demo.solutions.3.title'),
      content: t('demo.solutions.3.content'),
    },
    {
      icon: <Umbrella />,
      title: t('demo.solutions.4.title'),
      content: t('demo.solutions.4.content'),
    },
  ];

  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="px-14"
      >
        <CarouselNext className="right-2" />
        <CarouselPrevious className="left-2" />
        <CarouselContent>
          {appSolutions.map((solution, i) => (
            <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3">
              <Card>
                <CardHeader>
                  <div className="flex gap-3 items-center">
                    {solution.icon}
                    <h3 className="text-h-3">{solution.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-b-1">{solution.content}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

function Resources() {
  const { t } = useTranslation();

  const resources = [
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      link: 'https://www.figma.com/community/file/1203061493325953101/shadcn-ui-design-system',
      title: 'Shadcn-ui Design System',
    },
    {
      image: 'https://ui.shadcn.com/apple-touch-icon.png',
      link: 'https://ui.shadcn.com/docs',
      title: 'Shadcn-ui Docs',
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      link: 'https://react.dev/',
      title: 'React Docs',
    },
  ];

  const aditionalResources = [
    {
      link: 'https://axios-http.com/docs/intro',
      title: 'Axios',
    },
    {
      link: 'https://reactrouter.com/en/main',
      title: 'React Router Dom',
    },
    {
      link: 'https://react-redux.js.org/',
      title: 'Redux',
    },
    {
      link: 'https://tailwindcss.com',
      title: 'TailwindCSS',
    },
  ];

  return (
    <div>
      <h3 className="text-h-3 text-center mb-6">{t('demo.learning_resources')}</h3>
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6 max-w-screen-md mx-auto">
        {resources.map((resource, i) => (
          <Button key={i} size="lg" variant={'secondary'} className="gap-3" asChild>
            <a href={resource.link} key={i} target="_blank">
              <img src={resource.image} alt="" className="w-6 h-6" />
              <p className="text-b-1">{resource.title}</p>
            </a>
          </Button>
        ))}
      </div>
      <h3 className="text-s-1 text-center mb-3">{t('demo.additional_resources')}</h3>
      <div className="flex flex-col mx-auto items-center">
        {aditionalResources.map((resource, i) => (
          <Button key={i} variant={'link'} className="gap-3" asChild>
            <a href={resource.link} key={i} target="_blank">
              <p className="text-b-1">{resource.title}</p>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}

function ShadCn() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grow">
        <p className="text-b-1">Shadcn UI 🧩</p>
        <h1 className="text-h-1 mb-6">{t('demo.shadcn_title')}</h1>

        <ul>
          <li className="mb-3">
            <p className="text-b-1">{t('demo.shadcn_points.0')}:</p>
          </li>
          <li className="mb-3">
            <div className="flex gap-3 items-center">
              <Checkbox checked />
              <p className="text-h-3">{t('demo.shadcn_points.1')}</p>
            </div>
          </li>
          <li className="mb-3">
            <div className="flex gap-3 items-center">
              <Checkbox checked />
              <p className="text-h-3">{t('demo.shadcn_points.2')}</p>
            </div>
          </li>
          <li className="mb-3">
            <div className="flex gap-3 items-center">
              <Checkbox checked />
              <p className="text-h-3">{t('demo.shadcn_points.3')}</p>
            </div>
          </li>
          <li className="mb-3">
            <div className="flex gap-3 items-center">
              <Checkbox checked />
              <p className="text-h-3">{t('demo.shadcn_points.4')}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="grow">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
          <img src="./images/shadcn.png" className="w-full h-full object-cover" />
        </AspectRatio>
      </div>
    </div>
  );
}

function Typography() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div className="md:order-2">
        <p className="text-b-1 text-right">✒️ Typography</p>
        <h1 className="text-h-1 mb-6 text-right">{t('demo.typography_title')}</h1>
        <p className="text-b-1 max-w-xl ms-auto text-right">
          <Trans i18nKey={'demo.typography_detail'} t={t} components={[<CodeBlock />]} />
        </p>
      </div>
      <div className="md:order-1 border bg-slate-100 dark:bg-slate-900 rounded-md p-6">
        <h1 className="mb-3 text-h-1">Lorem Ipsum</h1>
        <h2 className="mb-3 text-h-2">Lorem Ipsum</h2>
        <h3 className="mb-3 text-h-3">Lorem Ipsum</h3>
        <h4 className="mb-3 text-s-1">Lorem Ipsum</h4>
        <h5 className="mb-3 text-s-2">Lorem Ipsum</h5>
        <p className="mb-3 text-b-1">Lorem Ipsum</p>
        <p className="mb-3 text-b-2">Lorem Ipsum</p>
        <span className="mb-3 text-c">Lorem Ipsum</span>
      </div>
    </div>
  );
}

function Redux() {
  const { t } = useTranslation();
  const store = useStore();

  return (
    <div>
      <p className="text-b-1 text-center">Redux store 🏪</p>
      <h1 className="text-h-1 text-center mb-3">{t('demo.redux_title')}</h1>
      <p className="text-b-1 text-center mb-6">
        <Trans i18nKey={'demo.redux_subtitle'} t={t} components={[<CodeBlock />]} />
      </p>

      <div className="flex gap-3 justify-center items-center">
        <Button onClick={() => store.dispatch(decrement())} variant={'outline'} size={'icon'}>
          <Minus />
        </Button>
        <ReduxShowData />
        <Button onClick={() => store.dispatch(increment())} variant={'outline'} size={'icon'}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}

function ReduxShowData() {
  const store = useStore();

  return (
    <div className="px-6 py-3 w-32 text-center border rounded-md bg-slate-100 dark:bg-slate-900">
      <h1 className="text-h-1">{store.state?.general.count}</h1>
    </div>
  );
}

function Storage() {
  const { t } = useTranslation();

  const [localValue, setLocalValue] = useState('');
  const [sessionValue, setSessionValue] = useState('');

  const getData = () => {
    const local = StorageService.get('local', 'demo-local');
    const session = StorageService.get('session', 'demo-session');

    setLocalValue(local);
    setSessionValue(session);
  };

  useEffect(() => {
    getData();
  }, []);

  const saveLocalValue = (val: string) => {
    StorageService.set('local', 'demo-local', val);
    getData();
  };

  const saveSessionValue = (val: string) => {
    StorageService.set('session', 'demo-session', val);
    getData();
  };

  return (
    <div>
      <p className="text-b-1 text-center">Browser Storage 📦</p>
      <h1 className="text-h-1 text-center mb-3">{t('demo.storage_title')}</h1>

      <p className="text-b-1 text-center mb-6">
        <Trans i18nKey={'demo.storage_subtitle'} t={t} components={[<CodeBlock />]} />
      </p>

      <div className="grid grid-cols-1 max-w-xs sm:grid-cols-2 gap-3 sm:max-w-2xl mx-auto">
        <div className="p-6 flex flex-col gap-3 text-center rounded-md border bg-slate-100 dark:bg-slate-900">
          <h1 className="text-6xl">🤖</h1>
          <p className="text-b-1 mb-auto">{t('demo.storage_local')}</p>
          <Input
            className="text-center"
            value={localValue}
            onChange={(e) => saveLocalValue(e.target.value)}
          />
        </div>
        <div className="p-6 flex flex-col gap-3 text-center rounded-md border bg-slate-100 dark:bg-slate-900">
          <h1 className="text-6xl">😶</h1>
          <p className="text-b-1 mb-auto">{t('demo.storage_session')}</p>
          <Input
            className="text-center"
            value={sessionValue}
            onChange={(e) => saveSessionValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

function Events() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <p className="text-b-1">Global events 💬</p>
        <h1 className="text-h-1 mb-6">{t('demo.events_title')}</h1>
        <p className="text-b-1 max-w-md ">
          <Trans i18nKey={'demo.events_detail'} t={t} components={[<CodeBlock />]} />
        </p>
      </div>
      <div>
        <NeneChan />
        <Separator className="my-6" />
        <HanakoKun />
      </div>
    </div>
  );
}

function NeneChan() {
  const events = useEvents();
  const [textShow, setTextShow] = useState(false);

  const greet = () => {
    setTextShow(true);

    setTimeout(() => {
      events.emit('general', { data: '🍩' });
    }, 1000);

    setTimeout(() => {
      setTextShow(false);
    }, 4000);
  };
  return (
    <div className="flex items-center gap-6 p-6 rounded-md bg-slate-100 dark:bg-slate-900 border">
      <Avatar className="w-20 h-20">
        <AvatarImage src="https://i.pinimg.com/564x/fc/18/de/fc18de05fc6a8b0104ccfbb7b8eb8c5d.jpg" />
        <AvatarFallback>YN</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-c mb-3">Yashiro nene</p>
        {textShow ? (
          <div className="p-3 h-fit bg-slate-800 rounded-2xl rounded-bl-none border">
            <h3 className="text-h-3">HANAKO KUN!, I brought you something!</h3>
          </div>
        ) : (
          <Button onClick={() => greet()} variant={'default'}>
            Give Hanako a donut 🍩
          </Button>
        )}
      </div>
    </div>
  );
}

function HanakoKun() {
  const events = useEvents();
  const [textShow, setTextShow] = useState(false);
  const [donut, setDonut] = useState('');

  const getDonut = (data: any) => {
    setDonut(data.data);
    setTextShow(true);

    setTimeout(() => {
      setTextShow(false);
      setDonut('');
    }, 5000);
  };

  useEffect(() => {
    const listenToNene = events.on('general', getDonut);

    return () => {
      events.off(listenToNene);
    };
  }, []);

  return (
    <div className="flex items-center gap-6 p-6 rounded-md bg-slate-100 dark:bg-slate-900 border">
      <Avatar className="w-20 h-20">
        <AvatarImage src="https://i.pinimg.com/736x/87/18/73/871873225f6347b47649d5baf9f0fa94.jpg" />
        <AvatarFallback>YA</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-c mb-3">Hanako kun</p>
        {textShow ? (
          <div className="p-3 h-fit bg-slate-800 rounded-2xl rounded-bl-none border">
            <h3 className="text-h-3">{donut} Arigatou, yashiro.</h3>
          </div>
        ) : (
          <h3 className="text-4xl">💤</h3>
        )}
      </div>
    </div>
  );
}

function Axios() {
  const { t } = useTranslation();

  const [albumId, setAlbumId] = useState('1');
  const [photos, setPhotos] = useState<Photo[]>([]);

  const getPhotos = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await PhotosApi.getPhotosInAlbum(albumId);
    setPhotos(data.slice(0, 10));
  };
  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div className="grow">
        <p className="text-b-1">API 🛜</p>
        <h1 className="text-h-1 mb-6">{t('demo.axios_title')}</h1>
        <p className="text-b-1 max-w-xl mb-6">
          <Trans i18nKey={'demo.axios_detail'} t={t} components={[<CodeBlock />]} />
        </p>
        <form onSubmit={getPhotos} className="flex gap-3">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input type="number" value={albumId} onChange={(e) => setAlbumId(e.target.value)} />
            <span className="text-c">Type number between 0 and 100</span>
          </div>
          <Button type="submit">Get</Button>
        </form>
      </div>
      <div className="grow">
        <div className="grid gap-3 grid-cols-5">
          {photos.map((photo, i) => (
            <AspectRatio key={i} ratio={1 / 1} className="overflow-hidden rounded-md">
              <img src={photo.url} className="w-full h-full object-cover" />
            </AspectRatio>
          ))}
        </div>
      </div>
    </div>
  );
}
