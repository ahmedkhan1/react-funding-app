import Box from '@mui/material/Box';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      style={{ background: '#f5f7f8' }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
      )}
    </div>
  );
}

export default TabPanel;