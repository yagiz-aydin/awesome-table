import { PersonelCardStyled, PersonInformation, PersonImage, PersonName,PersonDetail, PersonDetailData  } from './styled';
import { IPersonalCard } from './types';
import ContentLoader from "react-content-loader"

const contentLoaderProps ={
  speed:2,
  width:"100%",
  backgroundColor:"#cfcfcf",
  foregroundColor:"#bfbfbf",
  height: '64px'
}
export const Personal = ({ img, userInformations, loading }: IPersonalCard) => {
  const { firstname,lastname, id , pk} = userInformations

  return(
    <PersonelCardStyled>
    <PersonImage src={img ? img : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}/>
    <PersonInformation>
      {loading ?   <ContentLoader 
    speed={2}
    width={400}
    height={200}
    backgroundColor="#cfcfcf"
    foregroundColor="#bfbfbf"
  >
    <rect x="0" y="0" rx="3" ry="3" width="400" height="64" /> 
    <rect x="0" y="80" rx="3" ry="3" width="300" height="32" /> 
    <rect x="0" y="120" rx="3" ry="3" width="320" height="32" /> 
    <rect x="0" y="160" rx="3" ry="3" width="280" height="32" /> 
  </ContentLoader> : 
      <>
      <PersonName>  
            {`${firstname} ${lastname}`}
      </PersonName>
      <PersonDetailData>
        Id: {id}
        </PersonDetailData>
      <PersonDetailData>Primary Key: {pk}</PersonDetailData>
      <PersonDetail>Firebase Data{JSON.stringify(userInformations)}</PersonDetail></>}
    </PersonInformation>
  </PersonelCardStyled>
  )
};

const Card = { Personal };

export default Card;