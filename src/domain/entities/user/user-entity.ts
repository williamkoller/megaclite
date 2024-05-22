export type UserProps = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export class UserEntity {
  public props: UserProps;
  private constructor(props: UserProps) {
    this.props = {
      ...props,
    };
  }

  static create(props: UserProps): UserEntity {
    return new UserEntity(props);
  }

  get name(): string {
    return this.props.name;
  }

  get surname(): string {
    return this.props.surname;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set surname(surname: string) {
    this.props.surname = surname;
  }

  set email(email: string) {
    this.props.email = email;
  }

  set password(password: string) {
    this.props.password = password;
  }

  public toJSON(): UserProps {
    return this.props;
  }
}
