import { List, Paper } from "@mui/material"
import { EntryCard } from "./"
import { EntryStatus } from "@/interfaces"
import { FC, useContext } from "react";
import { EntriesContext } from '../../context/entries/EntriesContext'

interface Props {
  status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {
  const { entries } = useContext( EntriesContext ) 
  const entriesByStatus = entries.filter( entry => entry.status === status );
  return (
    // TODO: aquí haremos drop
    <div>
        <Paper sx={{ height: 'clalc(100vh - 180px)', backgroundColor: 'transparent', padding: 1, overflow: 'scroll' }}>
            {/* Todo: cambairá dependiendo si estoy haciendo drag o no */}
            <List sx={{ opacity: 1 }}>
              {
                entriesByStatus.map( entry => (
                  <EntryCard key={ entry._id } entry={ entry } />
                ))
              }
            </List>
        </Paper>
    </div>
  )
}


