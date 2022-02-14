import { Section, Title, ListFollingContainer, Repo } from './styles.js'

const FollingContainer = props => {
  return (
    <Section>
      <Title>Seguindo de {(props.name)?.split(' ')[0]}</Title>
      <ListFollingContainer>
        {(props?.repos).map(repo =>(
          <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id} >
            <h2>{repo?.name}</h2>
            <p>{repo?.description}</p>
          </Repo>
        ))}   
      </ListFollingContainer>
    </Section>
  )
}

export default FollingContainer;