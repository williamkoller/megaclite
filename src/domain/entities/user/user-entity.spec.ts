import { UserEntity, UserProps } from '@/domain/entities/user/user-entity';

describe('UserEntity', () => {
  const userProps: UserProps = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    password: 'securePassword123',
  };

  it('should create a user entity', () => {
    const user = UserEntity.create(userProps);
    expect(user).toBeInstanceOf(UserEntity);
    expect(user.name).toBe(userProps.name);
    expect(user.surname).toBe(userProps.surname);
    expect(user.email).toBe(userProps.email);
    expect(user.password).toBe(userProps.password);
  });

  it('should set and get properties', () => {
    const user = UserEntity.create(userProps);

    user.name = 'Jane';
    user.surname = 'Doe';
    user.email = 'jane.doe@example.com';
    user.password = 'newSecurePassword456';

    expect(user.name).toBe('Jane');
    expect(user.surname).toBe('Doe');
    expect(user.email).toBe('jane.doe@example.com');
    expect(user.password).toBe('newSecurePassword456');
  });

  it('should return JSON representation of the user', () => {
    const user = UserEntity.create(userProps);
    expect(user.toJSON()).toEqual(userProps);
  });
});
