import { Outlet, NavLink as RouterNavLink, matchPath, useLocation } from 'react-router-dom'
import { AppShell, Burger, Group, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { createContext } from 'react'
import { navLinks } from '../utils/router'

export const NavbarContext = createContext({
  toggleDesktop: () => {},
  toggleMobile: () => {},
  desktopOpened: true,
  mobileOpened: false,
})

export default function DefaultLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const location = useLocation()

  return (
    <AppShell
      navbar={{
        collapsed: { desktop: !desktopOpened, mobile: !mobileOpened },
        breakpoint: 'sm',
        width: 300,
      }}
      header={{ height: 60 }}
      layout="alt"
    >
      <AppShell.Navbar p="md">
        <Group justify="end">
          <Burger onClick={toggleMobile} opened={mobileOpened} hiddenFrom="sm" size="sm" mb="md" />
        </Group>
        {navLinks.map(item => (
          <NavLink
            classNames={{
              root: 'px-3 py-2.5 group rounded',
              label: 'font-medium',
            }}
            styles={{
              root: {
              },
            }}
            onClick={() => {
              if (location.pathname !== item.to)
                toggleMobile()
            }}
            active={!!matchPath(location.pathname, item.to)}
            leftSection={<item.icon />}
            component={RouterNavLink}
            label={item.label}
            key={item.to}
            to={item.to}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <NavbarContext.Provider value={{
          desktopOpened,
          toggleDesktop,
          mobileOpened,
          toggleMobile,
        }}
        >
          <Outlet />
        </NavbarContext.Provider>
      </AppShell.Main>
    </AppShell>
  )
}
