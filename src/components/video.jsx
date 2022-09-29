export const Video = () => (
    <div style={{position:'fixed', zIndex:'-1'}}>
      <video loop autoPlay mute >
        <source
          src="./pandora.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
)