import type { ReactNode } from 'react';

function HomeLayout({ Nav, Body }: { Nav: ReactNode, Body: ReactNode }) {
  return (
    <div className="app-frame">
      <aside className="nav-region">{Nav}</aside>
      <div className="main-region">{Body}</div>
    </div>
  );
}


export default HomeLayout
