import React from 'react';
import Home from "../pages/home";
import Tets from "../pages/test";
import Chat from "../pages/chat";
import ChatOnnx from "../components/chat-onnx";

export const routing = {
  main: {
    path: "/main",
    element: <Home />, //
    protected: false,
    role: "all",
  },

  test: {
    path: "/tets",
    element: <Tets />, //
    protected: false,
    role: "all",
  },

  Chat: {
    path: "/chat",
    element: <Chat />, //
    protected: false,
    role: "all",
  },

  ChatOnnx: {
    path: "/chat-onnx",
    element: <ChatOnnx />, //
    protected: false,
    role: "all",
  },
};
