import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "/opt/lampp/htdocs/React_portfolio/Portfolio/src/components/Material/alert.css";

export default function BasicAlerts() {
  return (
      <div id='animate'> 
    <Stack sx={{ width: '100%' }} spacing={2}>
     <Alert severity="error">This is an error alert — check it out!</Alert>
    </Stack>
    </div>
  );
}