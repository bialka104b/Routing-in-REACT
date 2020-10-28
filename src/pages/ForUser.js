//Nasza podstrona dla użytkowników zalogowanych
import {Route, Redirect} from 'react-router-dom';

const permission = false;
function ForUser() {
  return (
    <div className="for-user">
      <Route render={() => (
        // jeśli użtkownik ma pozwolenie na naszą strone to wyrenderuj h1, jesli nie to wyrenderuj strone główną
        permission ? (<h1>Tylko dla uzytkowników zalogowanych</h1>) : (<Redirect to="/"/>)
      )}/>
    </div>
  );
}
export default ForUser;