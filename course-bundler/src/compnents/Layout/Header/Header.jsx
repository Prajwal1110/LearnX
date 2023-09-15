import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerContent, DrawerOverlay, DrawerHeader, useDisclosure, DrawerBody, VStack, HStack } from '@chakra-ui/react'
import {RiDashboardFill, RiLoginCircleLine, RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';


const LinkButton = ({ url = '/', title = 'Home' }) => {
    return (
      <Link to={url}>
        <Button variant={'ghost'}>{title}</Button>
      </Link>
    );
  };
  


function Header() {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const isAuthenticated = false;
    const user = {
        role : "admin", 
    }

    const logoutHandler = () => {
        
    }
  return (
    <div>
      <ColorModeSwitcher/>

      <Button onClick={onOpen}
      colorScheme='purple' width="12" height={'12'} rounded="full" position={"fixed"}
       top="6"
       left="6">
        <RiMenu5Fill />
      </Button>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>LearnX</DrawerHeader>

          <DrawerBody>
            <VStack spacing={"4"} alignItems={"flex-start"}>
            <LinkButton url='/' title="Home" />
<LinkButton url='/courses' title="Browse Courses" />
<LinkButton url='/request' title="Request A course" />
<LinkButton url='/contact' title="Contact Us" />
<LinkButton url='/About' title="About" />

<HStack justifyContent={"space-evenly"} position={'absolute'} bottom={'2rem'} width="80%">
  {isAuthenticated ?
  (<>
      <VStack>
          <HStack>
            <Link to="/profile">
                <Button variant={'ghost'}>Profile</Button>
            </Link>

            <Button variant={'ghost'} onClick={logoutHandler}>
                <RiLoginCircleLine/>
                Logout
            </Button>
          </HStack>

          {user && user.role === "admin" && <Link to='/admin/dashboard'>
            <Button colorScheme='red' variant={'ghost'}>
                <RiDashboardFill style={{margin: "4px"}}/>
                Dashboard
            </Button>
          </Link>}
      </VStack>

  </>):
  (
    <>
      <Link to="/login">
        <Button colorScheme={"purple"}>Login</Button>
      </Link>
      <p>OR</p>
      <Link to="/signup">
        <Button colorScheme={"purple"}>Sign Up</Button>
      </Link>
    </>
  )}
</HStack>

            </VStack>
          </DrawerBody>
          </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Header;


