import {
  motion,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react'
import { useState } from 'react'
import './Gifting.css'

const gifts = [
  {
    id: 'morango-baunilha',
    name: 'Morango & baunilha',
    type: 'milkshake delicado',
    image:
      'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'talvez seja doce demais',
    rightMessage: 'esse é a sua cara',
  },
  {
    id: 'chocolate-intenso',
    name: 'Chocolate intenso',
    type: 'fatia cremosa',
    image:
      'https://images.unsplash.com/photo-1651378527289-36b9e2b8be58?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'talvez tenha algo mais seu',
    rightMessage: 'já deu água na boca',
  },
  {
    id: 'frutas-vermelhas',
    name: 'Frutas vermelhas',
    type: 'sobremesa da casa',
    image:
      'https://images.unsplash.com/photo-1589375025852-a66cdd127efb?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'pode deixar esse para depois',
    rightMessage: 'difícil passar por esse',
  },
  {
    id: 'limao-merengue',
    name: 'Limão & merengue',
    type: 'torta delicada',
    image:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'talvez você queira mais chocolate',
    rightMessage: 'tem cara de favorito',
  },
  {
    id: 'caramelo-salgado',
    name: 'Caramelo salgado',
    type: 'bolo da casa',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'fica para uma próxima vontade',
    rightMessage: 'esse pede uma caixa',
  },
  {
    id: 'pistache-frutas',
    name: 'Pistache & frutas',
    type: 'criação mimo',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'talvez seja hora de experimentar outro',
    rightMessage: 'olha, temos um favorito aqui',
  },
  {
    id: 'red-velvet',
    name: 'Red velvet',
    type: 'bolo macio',
    image:
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'bonito, mas seu coração quer outro',
    rightMessage: 'isso aqui foi um sim imediato',
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake de frutas',
    type: 'fatia fresca',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'hoje talvez você queira algo mais intenso',
    rightMessage: 'tem um lugar reservado no seu coração',
  },
  {
    id: 'brownie',
    name: 'Brownie & flor de sal',
    type: 'quadrado intenso',
    image:
      'https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'deixa esse pecado para depois',
    rightMessage: 'isso aqui merece uma caixa',
  },
  {
    id: 'torta-maca',
    name: 'Torta de maçã',
    type: 'receita afetiva',
    image:
      'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'talvez você esteja procurando outra história',
    rightMessage: 'cheiro de casa em forma de sobremesa',
  },
  {
    id: 'chocolate-morango',
    name: 'Chocolate & morango',
    type: 'clássico mimo',
    image:
      'https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'você está tentando resistir, né?',
    rightMessage: 'esse clássico nunca decepciona',
  },
  {
    id: 'macaron',
    name: 'Macarons',
    type: 'pequenos prazeres',
    image:
      'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'pequeno demais para essa vontade',
    rightMessage: 'um só? sabemos que não',
  },
  {
    id: 'donut',
    name: 'Donut de chocolate',
    type: 'mimo divertido',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'acho que é muito colorido',
    rightMessage: 'isso aqui gritou seu nome',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    type: 'clássico italiano',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=88',
    leftMessage: 'vamos deixar essa paixão para outra hora',
    rightMessage: 'sofisticado do jeitinho certo',
  },
  {
    id: 'profiterole',
    name: 'Profiteroles',
    type: 'delicadeza francesa',
    image:
      'https://images.unsplash.com/photo-1602903489862-1fe54b1f5ff2?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'seu coração pediu outra coisa',
    rightMessage: 'isso aqui está perigosamente tentador',
  },
  {
    id: 'bolo-laranja',
    name: 'Bolo de laranja',
    type: 'bolo afetivo',
    image:
      'https://images.unsplash.com/photo-1642069251474-5cc71cfdf49b?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'talvez hoje peça uma aventura',
    rightMessage: 'simples, bonito e impossível de ignorar',
  },
  {
    id: 'chocolate-branco',
    name: 'Chocolate branco & frutas',
    type: 'criação delicada',
    image:
      'https://images.unsplash.com/photo-1787755763092-d36f1ffceddc?w=1400&auto=format&fit=crop&q=88',
    leftMessage: 'talvez seja hora de mudar o sabor',
    rightMessage: 'essa combinação sabe conversar',
  },
]

const giftDetails = [
  'aniversários',
  'agradecimentos',
  'encontros',
  'sem motivo',
]

const SWIPE_THRESHOLD = 130

function SwipeFeedback({ gift, x, isTop }) {
  const rightFeedbackOpacity = useTransform(
    x,
    [0, SWIPE_THRESHOLD],
    [0, 1]
  )

  const leftFeedbackOpacity = useTransform(
    x,
    [-SWIPE_THRESHOLD, 0],
    [1, 0]
  )

  const rightFeedbackScale = useTransform(
    x,
    [0, SWIPE_THRESHOLD],
    [0.92, 1]
  )

  const leftFeedbackScale = useTransform(
    x,
    [-SWIPE_THRESHOLD, 0],
    [1, 0.92]
  )

  return (
    <>
      <motion.div
        className="gifting__feedback gifting__feedback--left"
        style={{
          opacity: isTop ? leftFeedbackOpacity : 0,
          scale: isTop ? leftFeedbackScale : 0.92,
        }}
      >
        <span>talvez não</span>
        <strong>{gift.leftMessage}</strong>
      </motion.div>

      <motion.div
        className="gifting__feedback gifting__feedback--right"
        style={{
          opacity: isTop ? rightFeedbackOpacity : 0,
          scale: isTop ? rightFeedbackScale : 0.92,
        }}
      >
        <span>sim, por favor</span>
        <strong>{gift.rightMessage}</strong>
      </motion.div>
    </>
  )
}

function SwipeCard({
  gift,
  depth,
  isTop,
  onSwipe,
}) {
  const controls = useAnimationControls()
  const x = useMotionValue(0)
  const prefersReducedMotion = useReducedMotion()

  const rotate = useTransform(
    x,
    [-300, 0, 300],
    [-14, 0, 14]
  )

  const stackScale = 1 - depth * 0.055
  const stackY = depth * 18
  const stackRotate =
    depth === 0 ? 0 : depth % 2 === 0 ? 1 : -1

  const handleDragEnd = async (_, info) => {
    if (!isTop) return

    const distance = info.offset.x

    if (Math.abs(distance) < SWIPE_THRESHOLD) {
      await controls.start({
        x: 0,
        rotate: 0,
        transition: {
          type: 'spring',
          stiffness: 500,
          damping: 28,
        },
      })

      return
    }

    const direction = distance > 0 ? 1 : -1

    await controls.start({
      x: direction * 620,
      rotate: direction * 18,
      opacity: 0,
      transition: prefersReducedMotion
        ? {
            duration: 0.2,
          }
        : {
            type: 'spring',
            stiffness: 280,
            damping: 24,
          },
    })

    onSwipe(gift.id)
  }

  return (
    <>
      <motion.article
        className={`gifting__card ${
          isTop ? 'gifting__card--active' : ''
        }`}
        style={{
          x: isTop ? x : 0,
          rotate: isTop ? rotate : stackRotate,
          zIndex: gifts.length - depth,
        }}
        animate={
          isTop
            ? controls
            : {
                scale: stackScale,
                y: stackY,
                opacity: 1,
              }
        }
        drag={isTop ? 'x' : false}
        dragDirectionLock
        dragElastic={0.72}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        whileDrag={
          isTop
            ? {
                scale: 1.025,
                cursor: 'grabbing',
              }
            : undefined
        }
        initial={
          depth === 0
            ? {
                opacity: 0,
                scale: 0.94,
                y: 45,
              }
            : false
        }
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
        }}
      >
        <div className="gifting__card-image">
          <img
            src={gift.image}
            alt={gift.name}
            draggable={false}
            loading={depth === 0 ? 'eager' : 'lazy'}
          />
        </div>

        <div className="gifting__card-info">
          <div>
            <span>{gift.type}</span>
            <h3>{gift.name}</h3>
          </div>
        </div>
      </motion.article>

      <SwipeFeedback
        gift={gift}
        x={x}
        isTop={isTop}
      />
    </>
  )
}

function Gifting() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleGifts = [0, 1, 2].map(
    (offset) =>
      gifts[(currentIndex + offset) % gifts.length]
  )

  const handleSwipe = (id) => {
    const swipedIndex = gifts.findIndex(
      (gift) => gift.id === id
    )

    if (swipedIndex === -1) return

    setCurrentIndex(
      (index) => (index + 1) % gifts.length
    )
  }

  return (
    <section className="gifting" id="presentear">
      <div className="gifting__header">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          para presentear
        </motion.p>

        <motion.span
          className="gifting__index"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          encontre o seu mimo
        </motion.span>
      </div>

      <div className="gifting__stage">
        <div
          className="gifting__background-type"
          aria-hidden="true"
        >
          <span>UM</span>
          <span>MIMO</span>
        </div>

        <motion.div
          className="gifting__deck"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          {visibleGifts.map((gift, depth) => (
            <SwipeCard
              key={gift.id}
              gift={gift}
              depth={depth}
              isTop={depth === 0}
              onSwipe={handleSwipe}
            />
          ))}
        </motion.div>

        <motion.div
          className="gifting__side-note gifting__side-note--top"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <span>01</span>
          <p>
            arraste para descobrir.
          </p>
        </motion.div>

        <motion.div
          className="gifting__side-note gifting__side-note--bottom"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
        >
          <span>02</span>
          <p>
            escolha o que merece uma caixa.
          </p>
        </motion.div>

        <motion.span
          className="gifting__asterisk"
          aria-hidden="true"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -25,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.55,
            ease: 'backOut',
          }}
        >
          ✳
        </motion.span>
      </div>

      <div className="gifting__footer">
        <motion.div
          className="gifting__message"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          <p className="gifting__message-label">
            um pequeno bilhete
          </p>

          <h2>
            Tem coisa que fica melhor
            <em> quando vem numa caixa.</em>
          </h2>
        </motion.div>

        <motion.div
          className="gifting__action"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          <p>
            Monte uma caixa com os doces que mais combinam
            com quem vai receber. Ou com você — a gente não
            vai contar.
          </p>

          <div className="gifting__occasions">
            {giftDetails.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>

          <motion.a
            className="gifting__link"
            href="#encomendas"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <span>montar uma caixa</span>

            <motion.span
              className="gifting__link-arrow"
              aria-hidden="true"
              variants={{
                hover: {
                  x: 8,
                  y: -8,
                  rotate: 8,
                },
              }}
              transition={{
                type: 'spring',
                stiffness: 360,
                damping: 22,
              }}
            >
              ↗
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gifting