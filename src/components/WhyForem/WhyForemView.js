import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { about_data_EN, about_data_ES} from '../../utils/information'

function WhyForemView(props) {

  let datos

  if(props.data.language === 'ES'){
    datos = about_data_ES
  }else{
    datos = about_data_EN
  }

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <>
    {datos.map((info) => (
      <>
    <Box sx={{backgroundColor: '#192E47', paddingBottom: 2}}>
      <Box
      sx={{paddingTop: 3, paddingRight: 3, paddingLeft: 3}}>
        <Stack >
          <Typography
            variant="h4"
            sx={{ 
            color: "#fff", textAlign: !isDesktop && 'center' }}>
            {`${info.banner1} `}
          </Typography>
        </Stack>
      </Box>
      <Grid container 
      direction={isDesktop ? 'row' : "column"} 
      spacing={3} 
      sx={{justifyContent: 'center', 
      display: 'flex', 
      padding: 3, marginBottom: 2}}>
          {info.text2.map((service) => (
          <Grid item md={4} xs={6} >
              <Stack direction='column' 
              >
                <Box sx={{display: 'flex', justifyContent: !isDesktop && 'center', width: '100%'}}>
                  <img src={`${service.photo}`} 
                  style={{width: isDesktop ? 320 : '80%', borderRadius: 5}}/>
                </Box>
                  <Typography variant='h6' 
                  sx={{color: '#fff', 
                  fontWeight: 'bold', 
                  marginTop: 2, textAlign: !isDesktop && 'center'}}>
                  {`${service.title}`}
                  </Typography>
                  <Typography variant='body1' 
                  sx={{color: '#fff', 
                  textAlign: !isDesktop && 'center'}}>
                  {`${service.description}`}
                  </Typography>
              </Stack>
          </Grid>
          ))}
        </Grid>
    </Box>
      <Box sx={{ padding: 3, }}>
        <Typography variant='h3' color="#000">{`${info.title2}`}</Typography>
        <Typography variant='body1' 
        color="#000"
        sx={{marginTop: 1}}>
          {`${info.text_random}`}
        </Typography>
        <Grid container direction='row' spacing={5} sx={{justifyContent: 'center', display: 'flex', marginTop: 2, marginBottom: 2}}>
          {info.text3.map((person) => (
          <Grid item sx={2}>
              <Stack direction='column' 
              sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  cursor: 'pointer'
                }}>
                  <img src={`${person.photo}`} style={{width: 200, borderRadius: 5}}/>
                  <Typography variant='h6' sx={{color: '#000', fontWeight: 'bold'}}>
                  {`${person.name}`}
                  </Typography>
                  <Typography variant='body1' sx={{color: '#000'}}>
                  {`${person.position}`}
                  </Typography>
              </Stack>
          </Grid>
          ))}
        </Grid>
      </Box>
      </>
    ))}
    </>
  )
}

export default WhyForemView