import { Box, Button, Grid, Paper, TextField } from '@material-ui/core'
import axios from 'axios';
import React, { useState } from 'react'
import UsersComponent from './UsersComponent';
import Fade from 'react-reveal/Fade';

export default function BaseComponent() {
    const [searchInput, setSearchInput] = useState('');
    const [gitUsers, setGitUsers] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [noUserMessage, setNoUserMessage] = useState(false);

    
    const handleChange = (e) => {
        setSearchInput(e.target.value)
      }
  
      const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const data = await axios.get(`https://api.github.com/users/${searchInput}`);
            setGitUsers(data.data);
            setLoading(false)
            setErrorMessage('') 
            setNoUserMessage(false)           
            console.log(gitUsers)
        }catch(err){
            console.log(err.message)
            setErrorMessage(err.message)
            setLoading(false)
            setNoUserMessage(true)
        }
     }

    return (
        <Fade bottom cascade>
            <Box className="baseComp">
                <Paper style={{height: '40%'}}>
                        
                        <form onSubmit={handleSubmit}>
                            <Grid container style={{marginTop: '.5rem', padding: '0 1rem'}}>
                                <Grid item md={8} xs={8} style={{marginTop: '1rem'}}> 
                                    <TextField 
                                        variant="outlined" 
                                        label="get a git user information" 
                                        placeholder="Input your git username"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={4} xs={4} style={{marginTop: '1rem'}}>
                                    <Button type="submit" variant="contained" style={{ height: '3.4rem', background: '#2cc5b4', color: 'white'}}   disabled={searchInput === ''}>
                                      Search
                                    </Button>
                                </Grid>
                            </Grid> 
                        </form>
                    
                    <UsersComponent 
                        gitUsers={gitUsers} 
                        loading={loading} 
                        errorMessage={errorMessage}
                        noUserMessage={noUserMessage}
                        />
                </Paper>
            </Box>
        </Fade>
    )
}
