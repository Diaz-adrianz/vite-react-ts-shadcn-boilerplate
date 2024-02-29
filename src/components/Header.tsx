import { GithubIcon } from 'lucide-react';
import { Button } from './ui/button';
import Config from '@/config';
import ThemeSelect from './theme-select';
import LocaleSelect from './locale-select';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full items-center gap-3 border-b-[1px] p-3">
      <div className="h-10 w-10  rounded-md p-1 dark:bg-transparent">
        <img src="./images/dazveloper-logo.png" className="w-full" />
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
