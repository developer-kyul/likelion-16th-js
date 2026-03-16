import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import React from 'react'
import './App.css'

// 2015~2018 React [ Class (Stateful) > Functional (Stateless) ]
// 2019~ React Hooks [ Class <<<<<<<<<<<<< Functional ]

export default class App extends React.Component {

  constructor(props) {
    super(props) // this.props

    // 자신만의 상태 객체 정의
    this.state = {
      count: 0 
    }

    // 실제 DOM 요소를 통해 실행되는 이벤트 핸들러는
    // 브라우저에서 사용자와 상호작용하는 과정 (버튼을 클릭 this === 버튼)
    // this 바인딩(binding)
    this.handleIncrease = this.handleIncrease.bind(this)
  }

  // class field
  // instance methods
  // Prototype Methods (All Instance Share Functions)
  handleIncrease() {
    // 리액트 클래스 컴포넌트가 제공하는 메서드만이 컴포넌트의 상태 업데이트
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <ViteSection 
          count={this.state.count} 
          onIncrement={this.handleIncrease} 
        />
        <Ticks />
        <NextStep />
        <Ticks />
        <Spacer />
      </>
    )
  }
}

function ViteSection({ count, onIncrement }) {
  return (
    <section id="center">
      <Hero />
      <GetStarted />
      <Counter count={count} onIncrement={onIncrement} />
    </section>
  )
}

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} className="base" width="170" height="179" alt="" />
      <img src={reactLogo} className="framework" alt="React logo" />
      <img src={viteLogo} className="vite" alt="Vite logo" />
    </div>
  )
}

function GetStarted() {
  return (
    <div>
      <h1>Get started</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
      </p>
    </div>
  )
}

function Counter({ count = 0, onIncrement }) {
  return (
    <button className="counter" onClick={onIncrement}>
      Count is {count}
    </button>
  )
}

function NextStep() {
  return (
    <section id="next-steps">
      <Docs />
      <Socials />
    </section>
  )
}

function Docs() {
  return (
    <div id="docs">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon"></use>
      </svg>
      <h2>Documentation</h2>
      <p>Your questions, answered</p>
      <ul>
        <li>
          <a href="https://vite.dev/" target="_blank">
            <img className="logo" src={viteLogo} alt="" />
            Explore Vite
          </a>
        </li>
        <li>
          <a href="https://react.dev/" target="_blank">
            <img className="button-icon" src={reactLogo} alt="" />
            Learn more
          </a>
        </li>
      </ul>
    </div>
  )
}

function Socials() {
  return (
    <div id="social">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Connect with us</h2>
      <p>Join the Vite community</p>
      <ul>
        <li>
          <a href="https://github.com/vitejs/vite" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://chat.vite.dev/" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon"></use>
            </svg>
            Discord
          </a>
        </li>
        <li>
          <a href="https://x.com/vite_js" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#x-icon"></use>
            </svg>
            X.com
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/vite.dev" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            Bluesky
          </a>
        </li>
      </ul>
    </div>
  )
}

function Ticks() {
  return <div className="ticks"></div>
}

function Spacer() {
  return <section id="spacer"></section>
}
