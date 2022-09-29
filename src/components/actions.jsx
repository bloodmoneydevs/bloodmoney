import { Button, Stack, Center } from "@chakra-ui/react" 
import { BrowserRouter, Route, Link } from "react-router-dom";

const Action = () => (
    <Center height={"55vh"} position={'relative'} zIndex={1}>
        <Stack spacing={1} direction={'row'} position={'absolute'} bottom={0}>
            <Button rounded={'sm'} px={9} height={"2%"} bg={'gray.800'} 
            color={'gray.100'} _hover={{color:'gray.800', bg:'whiteAlpha.700'}}>
                <Link to="/info">
                Indulge
                </Link>
            </Button>
            <Button
                height={"2%"}
                rounded={'sm'}
                px={9}
                colorScheme={'red'}
                bg={'red.700'}
                _hover={{ bg: 'red.500' }}
                fontFamily='El Messiri'>
                Atone
            </Button>
            <Button
                height={"2%"}
                rounded={'sm'}
                px={5}
                colorScheme={'red'}
                bg={'gray.800'}
                _hover={{color:'gray.800', bg:'whiteAlpha.700'}}
                fontFamily='El Messiri'>
                Demonomics
            </Button>
        </Stack>
    </Center>
)

export default Action