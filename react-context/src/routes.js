import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProvider from 'common/context/Usuario'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserProvider>
            <Login />
          </UserProvider>
        </Route>
        <Route path="/carrinho">
          <Carrinho/>
        </Route>
        <Route path="/feira">
          <Feira/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}