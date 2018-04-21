import { BrowserRouter, Route, Switch } from "react-route-dom"
import Welcome from "../../components/welcome"
import PlayContainer from "../../components/playContainer"
import WelcomeContainer from "../../components/welcomeContainer"
import WordList from "../../components/wordList"

const Router = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={WelcomeContainer} />
    <Route exact path="/wordlist" component={WordList} />
    <Route path="/:game" component={PlayContainer} />
    <Route component={Welcome} />
  </Switch>
  </BrowserRouter
)
