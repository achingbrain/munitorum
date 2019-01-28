'use strict'

const drawerWidth = 250

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  errorDisplay: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit,
    color: theme.palette.getContrastText(theme.palette.text.secondary),
    backgroundColor: theme.palette.text.secondary,
    borderWidth: 1,
    borderColor: theme.palette.getContrastText(theme.palette.text.secondary)
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  flexContainer: {
    display: 'flex'
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  appTitle: {
    lineHeight: 3,
    textAlign: 'center'
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  appTitleWrapper: {
    ...theme.mixins.toolbar
  },
  topBar: {
    color: 'white',
    backgroundColor: '#424242',
    display: 'flex',
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    marginTop: 64,
    [theme.breakpoints.down('xs')]: {
      marginTop: 56
    }
  },
  contentWrapper: {
    padding: theme.spacing.unit
  },
  viewContent: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 9
  },
  card: {
    marginBottom: theme.spacing.unit
  },
  cardHeader: {
    paddingRight: 36
  },
  cardContent: {
    padding: 0
  },
  allyViewCardContent: {
    padding: 0,
    margin: 0,
    '&:last-child': {
      padding: 0
    }
  },
  allyCard: {
    marginBottom: theme.spacing.unit,
    backgroundColor: '#3d3d3d'
  },
  allyEditorAddDetachment: {
    paddingLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  viewCardHeader: {
    padding: theme.spacing.unit,
    paddingBottom: 0
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  detachmentTypeWrapper: {
    marginBottom: theme.spacing.unit * 2
  },
  detachmentType: {
    marginBottom: theme.spacing.unit
  },
  textField: {
    marginRight: theme.spacing.unit,
    color: 'inherit'
  },
  table: {
    width: '100%'
  },
  tablePointsCell: {
    width: 100
  },
  tableIconCell: {
    width: 88
  },
  tableViewCell: {
    paddingTop: theme.spacing.unit / 4,
    paddingBottom: theme.spacing.unit / 4,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  tableViewRow: {
    height: 36
  },
  tableViewNameHeader: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    maxWidth: 500
  },
  tableViewIconCell: {
    padding: 0,
    paddingLeft: theme.spacing.unit,
    width: 24
  },
  tableViewNameCell: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    paddingLeft: 0,
    paddingRight: theme.spacing.unit
  },
  inlineButton: {
    padding: 0,
    marginLeft: 5
  },
  navButton: {
    marginLeft: 5
  },
  errorSnackbar: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.getContrastText(theme.palette.error.dark),
    marginBottom: theme.spacing.unit,
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%'
  },
  snackbarMessage: {
    display: 'flex',
    alignItems: 'center',
    margin: 0
  },
  snackbarIcon: {
    padding: 0,
    marginRight: 5
  },
  editListName: {
    flexGrow: 1,
    color: theme.palette.error.dark
  },
  rulesLink: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  fpLink: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  fp: {
    color: theme.palette.text.secondary,
    display: 'inline'
  },
  notes: {
    marginTop: theme.spacing.unit
  },
  avatar: {
    fontSize: 24,
    color: 'white'
  },
  detachmentAvatar: {
    fontSize: 36,
    color: 'white'
  },
  unitAvatar: {
    fontSize: 36,
    color: 'white',
    display: 'inline-block',
    float: 'left',
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  listListIcon: {
    marginRight: 0
  }
})

export default styles
