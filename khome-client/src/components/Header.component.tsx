import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Text
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons"
import { MantineLogo } from "@mantine/ds"

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    }
  },

  linkLabel: {
    marginRight: 5
  }
}))

interface HeaderActionProps {
  links: {
    link: string
    label: string
    links: { link: string; label: string }[]
  }[]
}

export default function HeaderAction() {
  const { classes } = useStyles()
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <MantineLogo size={28} />
        </Group>
        <Group spacing={5} className={classes.links}>
          <Text>Khome Application </Text>
        </Group>
        {/* <Button radius="xl" sx={{ height: 30 }}>
          Get early access
        </Button> */}
      </Container>
    </Header>
  )
}
