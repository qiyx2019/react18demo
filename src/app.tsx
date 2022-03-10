import { useState, useEffect,useMemo,FC } from "react";
import * as React from "react";
import { animated, useTransition,useSpring } from "react-spring";
import Chain from '@/components/chain'
import { messageService } from "@/services/message.service";
import ErrorBoundary from '@/components/error-boundary'
import UseRefDemo from "@/components/use-ref-demo";
import UseRedcerDemo from "@/components/use-reducer-demo";
import SuspenseDemo from "@/components/suspense-demo";
import UseTransitionDemo from "@/components/use-transition-demo";
import USeDeferredValueDemo from "@/components/use-deferred-value-demo";
import AppDemo from "@/react18-demo/demo2/app"
import AppDemo1 from "@/react18-demo/demo1/app"
interface HomeProps<T> {
  columns?: T[];
  data?: T[];
}
const Home = (props: HomeProps<any>) => {
  return (
   <ErrorBoundary>
       {/* <UseRefDemo /> */}
      {/* <UseRedcerDemo /> */}
     {/* <SuspenseDemo /> */}
     {/* <UseTransitionDemo /> */}
     {/* <USeDeferredValueDemo /> */}
     <AppDemo />
     {/* <AppDemo1 /> */}
   </ErrorBoundary>
  );
}
Home.displayName = 'Home';
export default Home;