import Head from 'next/head'
import HopeToDo, { HopeToDoProps } from '@/components/HopeToDo'
import IconButton from '@/components/IconButton'
import React, { FC, useState, Dispatch, ChangeEvent } from 'react'
import SectionTitle from '@/components/SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { mutableArray } from '@/data/mutable'
import { title } from '@/data/title'
import { useBoolean } from 'react-hanger/array'
import { useHopeToDoComponents } from '@/data/hooks/useHopeToDoComponents'
import { useInput } from 'react-hanger'
import { useSwitch3 } from '@/data/hooks/useSwitch3'

const withYouUnref = [
  'お話し',
  'デート',
  'ボイチャ',
  '作業通話',
  'VR睡眠',
  'VR感度開発',
  'DM（Discordなど）',
  'リアルで会う',
  'ボイトレ',
] as const

const andYouUnref = ['なでなで', 'だきつき', 'キス'] as const

const andYouEcchiUnref = [
  'みみなめ',
  '服を脱ぐ',
  '服を脱がす',
  'あいぶ（上半身）',
  'あいぶ（下半身）',
  'ほんばん',
] as const

/**
 * To make a request for [[Sheet]].
 */
const LoveLetter: NextPage = () => {
  const name = useInput('')
  const gender = useInput('')
  const role = useInput('妻')
  const anotherRole = useInput('')
  const startTimeToIn = useInput('21:00')
  const endTimeToIn = useInput('00:00')
  const [yourIconFilePath, setYourIconFilePath] = useState('')
  const setYourIconWithPreviewing = previewYourIconWith(setYourIconFilePath)

  const withYouComponents = useHopeToDoComponents(mutableArray(withYouUnref))
  const toYouComponents = useHopeToDoComponents(mutableArray(andYouUnref))
  const fromYouComponents = useHopeToDoComponents(mutableArray(andYouUnref))

  const toYouEcchiComponents = useHopeToDoComponents(mutableArray(andYouEcchiUnref))
  const [toYouEcchiIsVisible, { toggle: toggleToYouEcchiIsVisible }] = useBoolean(false)
  const fromYouEcchiComponents = useHopeToDoComponents(mutableArray(andYouEcchiUnref))
  const [fromYouEcchiIsVisible, { toggle: toggleFromYouEcchiIsVisible }] = useBoolean(false)

  const otherNotes = useInput('')

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

        <section className="rounded-box mt-6 flex flex-col items-center w-3/4v">
          <SectionTitle>あなたのきほん情報</SectionTitle>
          <label>
            名前
            <input type="text" {...name.eventBind} placeholder="なまえ" className="ml-4" />
          </label>

          <label className="mt-2">
            性別
            <input
              type="text"
              {...gender.eventBind}
              placeholder="女 | 男 | いぬ | ねこ | （自由入力）"
              className="ml-4"
            />
          </label>

          <div className="flex flex-row flex-wrap mt-2">
            <div>あなたは</div>
            <label className="ml-4">
              <input type="radio" {...role.eventBind} checked />妻
            </label>
            <label className="ml-2">
              <input type="radio" {...role.eventBind} />夫
            </label>
            <label className="ml-2">
              <input type="radio" {...role.eventBind} />
              <input type="text" {...anotherRole.eventBind} placeholder="その他（自由入力）" />
            </label>
          </div>

          <div className="flex flex-col my-4">
            <label>
              あなたのアイコン
              <input
                type="file"
                src={yourIconFilePath}
                onChange={setYourIconWithPreviewing}
                className="ml-4 p-2"
              />
            </label>
            {yourIconFilePath && (
              <div className="w-full flex flex-col items-center">
                <img
                  src={yourIconFilePath}
                  alt="あなたのアイコン"
                  className="w-32 h-auto mt-4 rounded-lg"
                />
              </div>
            )}
          </div>

          <label className="mt-2">
            インしやすい時間
            <input type="time" {...startTimeToIn.eventBind} className="ml-4" />
            {' 〜 '}
            <input type="time" {...endTimeToIn.eventBind} />
          </label>
        </section>

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">と</span>したいこと
            </div>
          }
          components={withYouComponents}
          className="mt-6 w-3/4v"
        />

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">に</span>したいこと
            </div>
          }
          components={toYouComponents}
          className="mt-6 w-3/4v"
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
              あなたが相手<span className="text-yellow-400">から</span>されたいこと
            </div>
          }
          components={fromYouComponents}
          className="mt-6 w-3/4v"
        >
          <HopeToEcchi
            isVisible={fromYouEcchiIsVisible}
            toggleIsVisible={toggleFromYouEcchiIsVisible}
            components={fromYouEcchiComponents}
          />
        </HopeToDo>

        <section className="rounded-box mt-6 flex flex-col items-center w-3/4v">
          <SectionTitle>その他</SectionTitle>
          <textarea {...otherNotes.eventBind} placeholder="相手に伝えたいことなど♡" />
        </section>
      </main>
    </div>
  )

  function previewYourIconWith(
    dispatch: Dispatch<string>,
  ): (event: ChangeEvent<HTMLInputElement>) => void {
    return () => {
      const target = event?.target as { files?: Array<Blob> } | null
      const uploaded = (target?.files ?? [])[0]
      if (uploaded === undefined) {
        // If no files selected.
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const file = e.target?.result
        if (typeof file !== 'string') {
          throw new Error(`Fatal error! unknown file type. file: ${file}`)
        }
        dispatch(file)
      }

      reader.readAsDataURL(uploaded)
    }
  }
}

export default LoveLetter

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

const HopeToEcchi: FC<HopeToEcchiProps> = ({ isVisible, toggleIsVisible, components }) => (
  <>
    <label>
      <input type="checkbox" checked={isVisible} onChange={toggleIsVisible} />
      えっちな項目を表示する
    </label>
    {isVisible && <HopeToDo components={components} className="w-full" />}
  </>
)
