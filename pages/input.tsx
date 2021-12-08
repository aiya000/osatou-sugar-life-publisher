import Head from 'next/head'
import HopeToDo, { HopeToDoProps, HopeToDoItem } from '@/components/HopeToDo'
import IconButton from '@/components/IconButton'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import { cloneDeep } from 'lodash'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { mutableArray } from '@/data/mutable'
import { title } from '@/data/title'
import { useBoolean } from 'react-hanger/array'
import { useIndexed } from '@/data/hooks/useIndexed'
import { useSwitch3, increment } from '@/data/hooks/switch3'

const withYouUnref: Readonly<Array<HopeToDoItem>> = [
  'お話し',
  'デート',
  'ボイチャ',
  '作業通話',
  'VR睡眠',
  'VR感度開発',
  'DM（Discordなど）',
  'リアルで会う',
  'ボイトレ',
].map((text) => ({ text, item: 0 }))

const andYouUnref: Readonly<Array<HopeToDoItem>> = ['なでなで', 'だきつき', 'キス'].map((text) => ({
  text,
  item: 0,
}))

const andYouEcchiUnref: Readonly<Array<HopeToDoItem>> = [
  'みみなめ',
  '服を脱ぐ',
  '服を脱がす',
  'あいぶ（上半身）',
  'あいぶ（下半身）',
  'ほんばん',
].map((text) => ({ text, item: 0 }))

/**
 * To make a request for 砂糖婚姻届け（[[Sheet]]）.
 */
const Input: NextPage = () => {
  const [withYou, switchWithYouItem] = useIndexed(mutableArray(withYouUnref), ({ text, item }) => ({
    text,
    item: increment(item),
  }))
  const withYouComponents = withYou.map(({ text, item }, i) => ({
    text,
    item,
    doSwitch: () => switchWithYouItem(i),
  }))

  const [andYou, switchAndYouItem] = useIndexed(mutableArray(andYouUnref), ({ text, item }) => ({
    text,
    item: increment(item),
  }))
  const andYouComponents = andYou.map(({ text, item }, i) => ({
    text,
    item,
    doSwitch: () => switchAndYouItem(i),
  }))

  const toYouComponents = cloneDeep(andYouComponents)
  const fromYouComponents = cloneDeep(andYouComponents)

  const [andYouEcchi, switchAndYouEcchiItem] = useIndexed(
    mutableArray(andYouEcchiUnref),
    ({ text, item }) => ({
      text,
      item: increment(item),
    }),
  )
  const andYouEcchiComponents = andYouEcchi.map(({ text, item }, i) => ({
    text,
    item,
    doSwitch: () => switchAndYouEcchiItem(i),
  }))

  const [toYouEcchiIsVisible, { toggle: toggleToYouEcchiIsVisible }] = useBoolean(false)
  const toYouEcchiComponents = cloneDeep(andYouEcchiComponents)
  const [fromYouEcchiIsVisible, { toggle: toggleFromYouEcchiIsVisible }] = useBoolean(false)
  const fromYouEcchiComponents = cloneDeep(andYouEcchiComponents)

  return (
    <div>
      <Head>
        <title>{title} - あなたの情報を入力</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <p className="font-extrabold text-pink-400 text-lg mt-4 md:text-2xl">
          まずは相手に情報を入力してもらうために
        </p>
        <p className="font-extrabold text-pink-400 text-lg mb-4 md:text-2xl">
          自分の情報を入力してください
        </p>

        <section className="rounded-box">
          <ExapleButton />
        </section>

        <section className="rounded-box w-3/4v mt-6">
          <p className="text-lg my-4 md:text-2xl">
            あなたが相手<span className="font-bold">と</span>したいこと
          </p>

          <div className="flex flex-row flex-wrap">
            {withYouComponents.map(({ text, item, doSwitch }) => (
              <IconButton
                text={text}
                current={item}
                onClick={doSwitch}
                key={text}
                className="m-2"
              />
            ))}
          </div>
        </section>

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="font-bold">に</span>したいこと
            </div>
          }
          components={toYouComponents}
        >
          <HopeToEcchi
            isVisible={toYouEcchiIsVisible}
            toggleIsVisible={toggleToYouEcchiIsVisible}
            components={toYouEcchiComponents}
          />
        </HopeToDo>

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="font-bold">から</span>されたいこと
            </div>
          }
          components={fromYouComponents}
        >
          <HopeToEcchi
            isVisible={fromYouEcchiIsVisible}
            toggleIsVisible={toggleFromYouEcchiIsVisible}
            components={fromYouEcchiComponents}
          />
        </HopeToDo>
      </main>
    </div>
  )
}

export default Input

const ExapleButton: FC = () => {
  const { item, doSwitch } = useSwitch3(0)
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={faExclamation} width={10} className="text-pink-200" />
        <p className="ml-2">操作説明</p>
      </div>

      <div className="flex flex-col items-center mt-4">
        <p>↓押して切り替える</p>
        <IconButton text="お試し" current={item} onClick={doSwitch} className="m-2" />
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faQuestionCircle} width={25} />
          <p className="ml-2">←まだわからない</p>
        </div>

        <div className="flex flex-row mt-2">
          <FontAwesomeIcon icon={faThumbsUp} width={25} />
          <p className="ml-2">←したい</p>
        </div>

        <div className="flex flex-row mt-2">
          <FontAwesomeIcon icon={faTimesCircle} width={25} />
          <p className="ml-2">←したくない</p>
        </div>
      </div>
    </div>
  )
}

type HopeToEcchiProps = HopeToDoProps & {
  isVisible: boolean
  toggleIsVisible: () => void
}

const HopeToEcchi: FC<HopeToEcchiProps> = ({ isVisible, toggleIsVisible, components }) => {
  const checkboxId = Math.random().toString()
  return (
    <>
      <input type="checkbox" checked={isVisible} onChange={toggleIsVisible} id={checkboxId} />
      <label htmlFor={checkboxId}>えっちな項目を表示する</label>
      {isVisible && <HopeToDo components={components} />}
    </>
  )
}
