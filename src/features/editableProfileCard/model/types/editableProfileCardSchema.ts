import { Profile } from '@/entities/Profile';
import { validateProfileError } from '../const/consts';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: validateProfileError[];
}
