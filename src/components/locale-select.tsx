import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export default function LocaleSelect() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          {language}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('id')}>Bahasa Indonesia</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
