import {
  NotFoundContainer,
  NotFoundImg,
  NotfoundHeading,
  NotFoundDescription,
} from './StyledComponents'

const NotFound = () => (
  <>
    <NotFoundContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotfoundHeading>Page Not Found</NotfoundHeading>
      <NotFoundDescription>
        we are sorry, the page you requested could not be found
      </NotFoundDescription>
    </NotFoundContainer>
  </>
)

export default NotFound
