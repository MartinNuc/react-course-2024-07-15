import { fireEvent, render, screen } from "@testing-library/react";
import { UserInfoPane } from "./UserInfoPane";
import { UserContextProvider } from "./UserContextProvider";

function setup() {

  function renderTest() {
    render(
      <UserContextProvider>
        <UserInfoPane />
      </UserContextProvider>
    );
  }

  function login(username: string, email: string) {
    fireEvent.change(screen.getByPlaceholderText('username'), { target: {value: username}});
    fireEvent.change(screen.getByPlaceholderText('email'), { target: {value: email}});
    fireEvent.click(screen.getByRole('button', { name: 'Login'}));
  }

  function logout() {
    fireEvent.click(screen.getByRole('button', { name: 'logout'}));
  }

  function getLogoutButton() {
    return screen.getByRole('button', { name: 'logout'});
  }

  return {
    render: renderTest,
    login,
    logout,
    getLogoutButton
  }
}

describe('UserInfoPane', () => {
  it('displays login form', () => {
    const {render} = setup();
    render();
    expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
  });

  it('logs in the user', () => {
    const {render, login, getLogoutButton} = setup();
    render();
    login('martin', 'martin@nuc.cz');

    expect(getLogoutButton()).toBeInTheDocument();
  });

  it('shows user info when user is logged', () => {
    const {render, login} = setup();
    render();

    login('user1', 'user1@company.com');

    expect(screen.getByText('username: user1')).toBeInTheDocument();
    expect(screen.getByText('email: user1@company.com')).toBeInTheDocument();
  });
  it('logs out the user', () => {
    const {render, login, logout} = setup();
    render();

    login('user1', 'user1@company.com');
    logout();

    expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
  });

})