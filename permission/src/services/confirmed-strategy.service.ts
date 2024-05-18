import { IPermissionStrategy } from '../interfaces/permission-strategy.interface';
import { IUser } from '../interfaces/user.interface';

export class ConfirmedStrategyService implements IPermissionStrategy {
  public getAllowedPermissions(user: IUser, permissions: string[]): string[] {
    const forbiddenPermissions = [
      'video_search_by_user_id',
      'video_create',
      'video_delete_by_id',
      'video_update_by_id',
    ];
    return user.is_confirmed
      ? permissions
      : permissions.filter((permission: string) => {
          return !forbiddenPermissions.includes(permission);
        });
  }
}
