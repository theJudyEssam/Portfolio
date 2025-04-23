
import {Flex,Box, Link, Card, Text } from "@radix-ui/themes"


interface projectProps{
    title: string,
    description: string, 
    link: string 
}



export default function Projectcard(props: projectProps){


               return (
              


                <Box width="500px">
              <Card size="3">
                <Flex gap="4" align="center">
                  <Box>
                    <Link href={props.link}><Text as="div" size="4" weight="bold">
                      {props.title}
                    </Text></Link>
                    
                    <Text as="div" size="4" color="gray">
                      {props.description}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>

              
             )


}