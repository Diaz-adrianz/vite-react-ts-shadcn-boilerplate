import { GithubIcon } from 'lucide-react';
import { Button } from './ui/button';
import Config from '@/config';
import ThemeSelect from './theme-select';
import LocaleSelect from './locale-select';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex gap-3 p-3 items-center border-b-[1px]">
      <div className="w-10 h-10  dark:bg-transparent p-1 rounded-md">
        <img src="./images/dzco-logo.png" className="w-full" />
      </div>
      <h3 className="text-h-3">{t('signature', { author: Config.general.author.name })}</h3>
      <div className="grow"></div>
      <LocaleSelect />
      <ThemeSelect />
      <Button variant={'secondary'} size="icon" asChild>
        <a href={Config.general.author.github} target="_blank">
          <GithubIcon size={16} />
        </a>
      </Button>
    </div>
  );
}
