import { Box, Card, CardContent, CircularProgress, Typography, List, ListItem, Grid, Avatar } from '@material-ui/core'
import React from 'react'
import Fade from 'react-reveal/Fade';
import { Alert } from '@material-ui/lab';


export default function UsersComponent(props) {
    const { gitUsers, loading, errorMessage, noUserMessage } = props;

    console.log(gitUsers)
    return (
        <Box style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
            <Card style={{width: '100%'}}>
                <CardContent>
                    <Box>
                        <Typography 
                            variant="h5" component="h5" 
                            style={{textAlign: 'center', fontWeight: 'bold'}}>
                            Git User Info Search Result
                        </Typography>
                        {noUserMessage && (<Typography variant="body1" component="h5">No user was found</Typography>)}
                        {gitUsers.login && 
                            <Typography 
                                variant="body1" component="h5" 
                                style={{textAlign: 'center', fontWeight: 'bold'}}>
                                {gitUsers.login && (`Your search for ${gitUsers.login} was found`)}
                            </Typography>}
                    </Box>
                    <Box>
                        {
                         loading && (<Box style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></Box>)} 
                        {errorMessage && (<Box style={{display: 'flex', justifyContent: 'center'}}><Alert severity="error">{errorMessage} couldn't fetch data</Alert></Box>)}
                        <List>
                            {gitUsers && (
                                <>
                                 
                                   <Grid container>
                                        <Grid item md={6} xs={6}>
                                         <Fade right cascade>
                                            <ListItem>
                                                Name: {" "}<Fade left cascade>{gitUsers.name}</Fade>
                                            </ListItem>
                                            <ListItem>
                                                Username: {" "}{gitUsers.location}
                                            </ListItem>
                                            <ListItem>
                                                UserId: {" "}{gitUsers.name}
                                            </ListItem>
                                            <ListItem>
                                                Location: {" "}{gitUsers.location}
                                            </ListItem>
                                            <ListItem>
                                                Blog: {" "}{gitUsers.blog ? gitUsers.blog : 'No Blog' }
                                            </ListItem>
                                            <ListItem>
                                                Public Repos: {" "}{gitUsers.public_repos }
                                            </ListItem>
                                            <ListItem>
                                                Followers: {" "}{gitUsers.followers ? gitUsers.followers : 'None'}
                                            </ListItem>
                                            <ListItem>
                                                Following: {" "}{gitUsers.following ? gitUsers.following : 'None' }
                                            </ListItem>
                                          </Fade>
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            <Fade right cascade>
                                                <ListItem>
                                                    Avatar: {" "}<Avatar src={gitUsers.avatar_url} />
                                                </ListItem>
                                                <ListItem>
                                                    Bio: {" "}{gitUsers.bio}
                                                </ListItem>
                                                <ListItem>
                                                    Company: {" "}{gitUsers.company ? gitUsers.company : 'None at the moment'}
                                                </ListItem>
                                                <ListItem>
                                                    Visit Git Profile: {" "}<a href={gitUsers.html_url}>{gitUsers.url}</a>
                                                </ListItem>
                                            </Fade>
                                        </Grid>
                                   </Grid>
                                </>
                            )}
                        </List>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
