import Layout from '@/components/layouts/Layout';
import EntryList from '@/components/ui/EntryList';
import { Grid, Card, CardHeader, CardContent} from '@mui/material'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 6.25rem)' }}>
            <CardHeader title="Pendientes" />

              { /* Agregar una nueva entrada */ }
              { /* Listado de las entradas */ }
              <EntryList status='pending' />

          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 6.25rem)' }}>
            <CardHeader title="En Progreso" />
            <EntryList status='in-progress'/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 6.25rem)' }}>
            <CardHeader title="Completadas" />
            <EntryList status='finished'/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;

