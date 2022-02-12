import { Section, Title, ListReposContainer, Repo } from './styles.js'

const ReposContainer = props => {
  return (
    <Section>
      <Title>Repositórios de{(props.name)?.split(' ')[0]}</Title>
      <ListReposContainer>
        {(props?.repos).map(repo =>(
          <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id} >
            <h2>{repo?.name}</h2>
            <p>{repo?.description}</p>
          </Repo>
        ))}   
      </ListReposContainer>
    </Section>
  )
}