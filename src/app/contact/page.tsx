import Container from '@/components/Container';
import SiteGrid from '@/components/SiteGrid';
import ImageMedium from '@/components/image/ImageMedium';
import EmailInput from '@/components/EmailInput';
import PhotoTag from '@/tag/PhotoTag';
import PhotoCamera from '@/camera/PhotoCamera';
import {Camera} from '@/camera/index';

// import { clsx } from 'clsx/lite';

export default async function AdminConfigurationPage() {
  const SONY_CAMERA: Camera = { make: 'Sony', model: 'ILCE-6400' };
  return (
    <SiteGrid
      contentMain={
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex-grow">
              About
            </div>
          </div>
          <Container spaceChildren={false} centered={true} color={'blue'}>
            <div className="max-w-xl w-full">
              <div className="space-y-6">
                <ImageMedium
                  src="https://photo-blog-store.fletcherwalmsley.com/photo-CQkwS6FzSfFMP1XH.jpg"
                  alt="https://photo-blog-store.fletcherwalmsley.com/photo-CQkwS6FzSfFMP1XH.jpg"
                  aspectRatio={3.0 / 2.0}
                  // className={clsx()}
                />
                <p>
                Hello! My name is Fletcher Walmsley! - Welcome to my photo blog! <br/> <br/>
                This is a place where I add photos I think are cool. <br/>
                The photos I add here are ones I think are photographically good, 
                or because I like the people/place/vibe in them, 
                or because it is a film photo and I need to post somewhere to justify paying ~$1.4 a photo! <br/> <br/>
                The decent pics are usually taken on my Sony A6400 and can be found under the <PhotoCamera camera={SONY_CAMERA} contrast="medium" prefetch={false}/> filter.<br/> <br/>
                Film photos can be found under the <PhotoTag tag="film" contrast="medium" prefetch={false}/> tag.
                Each film photo is also tagged with the film stock used. Such as: <PhotoTag tag="fujifilm-200" contrast="medium" prefetch={false}/>, or <PhotoTag tag="kodak-ultramax-400" contrast="medium" prefetch={false}/>.
                </p>
              </div>
            </div>
          </Container>
          <Container color={'blue'}>
            <div className="max-w-xl w-full">
              <div className="space-y-6">
                <p>
                <b> Stay in contact! </b> <br/> <br/>
                If you would like to be notified when I post new photos, please enter your email below! <br/>
                These update emails are sent manually by me - as I like to personalise them!
                So do not worry about spam, as that would be far too much effort 😜
                </p>
                <EmailInput/>
              </div>
            </div>
          </Container>
          <Container color={'blue'}>
            <div className="max-w-xl w-full">
              <div className="space-y-6">
                <p>
                <b>About Me:</b> <br/> <br/>
                I am a Software Developer who is currently based in Christchurch, New Zealand.
                I love everything outdoors and attempt to bring a camera of some sorts along with me. <br/> <br/>
                While I am a Software Engineer, my area of expertise is not in web development.
                So I will not claim to have created this website, but rather forked and modified the excellent exif-photo-blog template by Sam Becker.
                </p>
              </div>
            </div>
          </Container>
        </div>}
    />
  );
}
