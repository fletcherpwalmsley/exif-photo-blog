import Container from '@/components/Container';
import AppGrid from '@/components/AppGrid';
import ImageMedium from '@/components/image/ImageMedium';
import EmailInput from '@/components/EmailInput';
import PhotoCamera from '@/camera/PhotoCamera';
import PhotoFilm from '@/film/PhotoFilm';
import {Camera} from '@/camera/index';

// import { clsx } from 'clsx/lite';

export default async function AdminConfigurationPage() {
  const SONY_CAMERA: Camera = { make: 'Sony', model: 'ILCE-6400' };
  return (
    <AppGrid
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
                This is the place for me to share my photos that I think are cool. <br/>
                Generally, they are here because any of the following reasons: <br/>
                They are photographically good, I like the people/place/vibe in them, 
                it is a film photo and I need to post it somewhere to justify paying ~$1.4 per pic! <br/> <br/>
                The decent photos are usually taken on my Sony A6400 and can be found under the 
                <PhotoCamera camera={SONY_CAMERA} contrast="medium" prefetch={false}/> filter.<br/> <br/>
                 My film photos are filtered by films stock and are found under film specific tags, such as: 
                <PhotoFilm film={'kodak-ultramax-400'} type="icon-first"/> or <PhotoFilm film={'fujifilm-200'} type="icon-first"/>.
                </p>
              </div>
            </div>
          </Container>
          <Container color={'blue'}>
            <div className="max-w-xl w-full">
              <div className="space-y-6">
                <p>
                <b> Stay in contact! </b> <br/> <br/>
                If you would like to be notified when I post new photos, please enter your email below! 
                These update emails are sent manually by me - as I like to personalise them! <br/>
                Don&apos;t worry about spam, that would be far too much effort 😜
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
                I&apos;m a Software Developer, based in Christchurch, New Zealand. <br/> 
                I love everything outdoors and attempt to bring a camera of some sorts along with me. <br/> <br/>
                While I love all things tech, my area of expertise is not web development. 
                As such, this website is a lightly modified fork of the excellent exif-photo-blog template by Sam Becker. <br/>
                You can find a link to the template&apos;s Github in the footer of this page. <br/>
                </p>
              </div>
            </div>
          </Container>
        </div>}
    />
  );
}
