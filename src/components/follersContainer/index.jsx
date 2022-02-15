import { Section, Title, ListOfFollersContainer, Foller } from './styles.js'

const FollerContainer = props => {
  return (
    <Section>
      <Title>Seguidores de {(props.name)?.split(' ')[0]}</Title>
      <ListOfFollersContainer>
        {(props?.followers).map(follers =>(
          <Foller onClick={() => window.location.href(follers?.followers_url)} key={follers?.id} >
            <h2>{follers?.login}</h2>
            <p>{follers?.description}</p>
          </Foller>
        ))}   
      </ListOfFollersContainer>
    </Section>
  );
}

export default FollerContainer;