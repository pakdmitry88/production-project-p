export { userActions, userReducer } from './model/slice/userSlice';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelector';

export { UserRole } from './model/consts/userConsts';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserInited } from './model/selectors/geUserInited/getUserInited';

export type { UserSchema, User } from './model/types/user';

export { useJsonSettings } from './model/selectors/jsonSettings';
// export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSattings';

export { initAuthData } from './model/services/initAuthData';
